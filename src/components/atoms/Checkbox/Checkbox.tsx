import { FC } from 'react';

import { ETypographyVariant } from '@enums/typography';

import Typography from '../Typography';

import * as S from './Checkbox.styled';

interface ICheckboxProps {
  label: string;
  name: string;
  isChecked: boolean;
  onClick(): void;
}

const Checkbox: FC<ICheckboxProps> = ({ label, name, isChecked, onClick }) => (
  <S.CheckboxLabel htmlFor={name} onClick={onClick} onChange={onClick}>
    <S.Checkbox
      type="checkbox"
      name={name}
      checked={isChecked}
      onClick={onClick}
      onChange={onClick}
    />
    <Typography displayAs={ETypographyVariant.H4}>{label}</Typography>
  </S.CheckboxLabel>
);

export default Checkbox;

import { ChangeEventHandler, FC } from 'react';

import { ETypography } from '@src/types/typography';

import * as S from './Input.styled';

interface InputProps extends Partial<HTMLInputElement> {
  id: string;
  name: string;
  value: string;
  label?: string;
  onChange: ChangeEventHandler;
}

const Input: FC<InputProps> = ({ id, name, value, label, type, placeholder, onChange }) => {
  return (
    <S.Wrapper>
      {label && (
        <S.Label as="label" displayAs={ETypography.Body} htmlFor={id}>
          {label}
        </S.Label>
      )}
      <S.Input
        id={id}
        name={name}
        type={type || 'text'}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </S.Wrapper>
  );
};

export default Input;

import { FC, HTMLInputTypeAttribute } from 'react';

import { ETypography } from '@src/types/typography';

import * as S from './Input.styled';

interface InputProps {
  id: string;
  value?: string;
  label?: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
}

const Input: FC<InputProps> = ({ id, value, label = '', type = 'text', placeholder = '' }) => {
  return (
    <S.Wrapper>
      {label && (
        <S.Label as="label" displayAs={ETypography.Body} htmlFor={id}>
          {label}
        </S.Label>
      )}
      <S.Input id={id} type={type} value={value} placeholder={placeholder}></S.Input>
    </S.Wrapper>
  );
};

export default Input;

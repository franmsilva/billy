import { ChangeEventHandler, FC } from 'react';

import { ETypographyVariant } from '@enums/typography';
import { Core } from '@types';

import * as S from './Input.styled';

interface InputProps extends Partial<HTMLInputElement>, Core.IStyledComponent {
  id: string;
  name: string;
  value: string;
  label?: string;
  onChange: ChangeEventHandler;
}

const Input: FC<InputProps> = ({
  id,
  name,
  value,
  label,
  type,
  placeholder,
  onChange,
  className,
}) => {
  return (
    <S.Wrapper className={className}>
      {label && (
        <S.Label as="label" displayAs={ETypographyVariant.Body} htmlFor={id}>
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

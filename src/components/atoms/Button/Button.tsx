import Image from 'next/image';
import { FC, MouseEventHandler, ReactNode } from 'react';

import { Core } from '@types';

import * as S from './Button.styled';

interface IICon {
  src: string;
  height?: number;
  width?: number;
}

export enum EButtonTheme {
  Primary = 'Primary',
  Secondary = 'Secondary',
  Tertiary = 'Tertiary',
  Danger = 'Danger',
  Text = 'Text',
}

interface ButtonProps extends Core.IStyledComponent {
  icon?: IICon;
  name?: string;
  // Prefixed to avoid clash with styled-components theme prop
  btnTheme?: EButtonTheme;
  fullWidth?: boolean;
  onClick?: MouseEventHandler;
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

const DEFAULT_ICON_SIZE = 10;

const Button: FC<ButtonProps> = ({
  icon,
  name,
  btnTheme = EButtonTheme.Primary,
  fullWidth,
  onClick,
  className,
  children,
  type,
}) => {
  const hasIcon = !!icon;

  return (
    <S.Button
      $btnTheme={btnTheme}
      $fullWidth={fullWidth}
      $hasIcon={hasIcon}
      name={name}
      className={className}
      onClick={onClick}
      type={type}
    >
      {hasIcon && (
        <S.IconWrapper>
          <Image
            alt=""
            src={icon.src}
            height={icon.height || DEFAULT_ICON_SIZE}
            width={icon.width || DEFAULT_ICON_SIZE}
          />
        </S.IconWrapper>
      )}
      {children}
    </S.Button>
  );
};

export default Button;

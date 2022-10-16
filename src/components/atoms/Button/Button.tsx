import Image from 'next/image';
import { FC, MouseEventHandler, ReactNode } from 'react';

import { Core } from '@types';

import * as S from './Button.styled';

export enum EButtonTheme {
  Primary = 'Primary',
  Secondary = 'Secondary',
  Tertiary = 'Tertiary',
  Danger = 'Danger',
}

interface ButtonProps extends Core.IStyledComponent {
  icon?: string;
  // Prefixed to avoid clash with styled-components theme prop
  $theme?: EButtonTheme;
  fullWidth?: boolean;
  onClick: MouseEventHandler;
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({
  icon,
  $theme = EButtonTheme.Primary,
  fullWidth,
  onClick,
  className,
  children,
}) => {
  const shouldRenderIcon = icon && $theme === EButtonTheme.Primary;

  return (
    <S.Button
      $btnTheme={$theme}
      $fullWidth={fullWidth}
      $hasIcon={shouldRenderIcon}
      className={className}
      onClick={onClick}
    >
      {shouldRenderIcon && (
        <S.IconWrapper>
          <Image src={icon} alt="" height={10} width={10} />
        </S.IconWrapper>
      )}
      {children}
    </S.Button>
  );
};

export default Button;

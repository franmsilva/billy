import styled, { css } from 'styled-components';

import { flexCenter } from '@styles/snippets';

import { Heading4 } from '../Typography';

import { EButtonTheme } from './Button';

interface IButtonProps {
  $btnTheme: EButtonTheme;
  $fullWidth: boolean;
  $hasIcon: boolean;
}

export const Button = styled.button<IButtonProps>`
  ${({ $btnTheme, $fullWidth, $hasIcon }) => css`
    ${Heading4}
    ${flexCenter}
    ${$fullWidth &&
    css`
      width: 100%;
    `};
    height: 48px;
    padding: 16px 20px;
    ${$hasIcon &&
    css`
      padding-left: 8px;
    `};
    position: relative;
    border: none;
    cursor: pointer;
    border-radius: ${({ theme }) => theme.borderRadius[24]};

    ${$btnTheme === EButtonTheme.Primary &&
    css`
      color: white;
      background-color: ${({ theme }) => theme.colors.cornflowerBlue};

      :hover {
        background-color: ${({ theme }) => theme.colors.cornflowerBlueLight};
      }
    `}

    ${$btnTheme === EButtonTheme.Secondary &&
    css`
      color: ${({ theme }) => theme.colors.baliHai};
      background-color: ${({ theme }) => theme.colors.slateGray};

      :hover {
        background-color: ${({ theme }) => theme.colors.vulcan};
      }
    `}

    ${$btnTheme === EButtonTheme.Tertiary &&
    css`
      color: ${({ theme }) => theme.colors.shipCove};
      background-color: ${({ theme }) => theme.colors.selagoLight};

      :hover {
        background-color: ${({ theme }) => theme.colors.selago};
      }
    `}

    ${$btnTheme === EButtonTheme.Danger &&
    css`
      color: white;
      background-color: ${({ theme }) => theme.colors.sienna};

      :hover {
        background-color: ${({ theme }) => theme.colors.siennaLight};
      }
    `}

    ${$btnTheme === EButtonTheme.Text &&
    css`
      flex-direction: row-reverse;
      background-color: transparent;
      color: ${({ theme }) => theme.colors.vulcan};
      width: 200px;
      padding: 0;
      margin: 0 auto;

      ${IconWrapper} {
        background-color: transparent;
        margin: 0;
      }
    `}
  `}
`;

export const IconWrapper = styled.span`
  ${flexCenter}
  height: 32px;
  width: 32px;
  margin-right: 16px;
  border-radius: 50%;
  background-color: white;
`;

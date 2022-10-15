import NextImage from 'next/image';
import styled, { css } from 'styled-components';

export const Header = styled.header`
  height: 100vh;
  width: 100px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.slateGray};
  border-top-right-radius: ${({ theme }) => theme.borderRadius[20]};
  border-bottom-right-radius: ${({ theme }) => theme.borderRadius[20]};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  ${({ theme }) => css`
    height: 100px;
    width: 100px;
    background: linear-gradient(
      to bottom,
      ${theme.colors.cornflowerBlue} 0%,
      ${theme.colors.cornflowerBlue} 50%,
      ${theme.colors.cornflowerBlueLight} 50%,
      ${theme.colors.cornflowerBlueLight} 100%
    );
    border-bottom-right-radius: ${theme.borderRadius[20]};
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

export const UserContainer = styled.div`
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid ${({ theme }) => theme.colors.baliHai};
`;

export const Image = styled(NextImage)`
  border-radius: 50%;
`;

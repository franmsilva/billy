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
  z-index: ${({ theme }) => theme.zIndex.navbar};
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
  cursor: pointer;
`;

export const PopupMenu = styled.div<{ $isOpen: boolean }>`
  max-width: 0;
  background-color: ${({ theme }) => theme.colors.slateGray};
  color: ${({ theme }) => theme.colors.whisper};
  position: absolute;
  bottom: 2rem;
  left: 6.5rem;
  z-index: ${({ theme }) => theme.zIndex.modal};
  border-radius: ${({ theme }) => theme.borderRadius[8]};
  transition: max-height 200ms ease-in-out, padding 200ms ease-in-out;

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      max-width: 100%;
      padding: 1rem;
    `}
`;

export const LinkContent = styled.a`
  cursor: pointer;
  text-transform: capitalize;
  :hover {
    color: ${({ theme }) => theme.colors.baliHai};
    transition: 200ms;
  }
`;

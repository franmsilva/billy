import NextImage from 'next/image';
import styled, { css } from 'styled-components';

import { Heading4 } from '@components/atoms/Typography';
import { devices } from '@styles/mediaQueries';
import { boldBoxShadow, flexCenter } from '@styles/snippets';

const MOBILE_HEIGHT = 72;
const TABLET_HEIGHT = 80;
const LAPTOP_WIDTH = 100;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: ${MOBILE_HEIGHT}px;

  @media ${devices.tablet} {
    height: ${TABLET_HEIGHT}px;
  }

  @media ${devices.laptop} {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: ${LAPTOP_WIDTH}px;
  }
`;

export const Header = styled.header`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  z-index: ${({ theme }) => theme.zIndex.navbar};
  background-color: ${({ theme }) => theme.colors.slateGray};

  @media ${devices.laptop} {
    flex-direction: column;
    justify-content: space-between;
    border-top-right-radius: ${({ theme }) => theme.borderRadius[20]};
    border-bottom-right-radius: ${({ theme }) => theme.borderRadius[20]};
    overflow: hidden;
  }
`;

export const LogoContainer = styled.div`
  ${({ theme }) => css`
    ${flexCenter}
    position: relative;
    height: ${MOBILE_HEIGHT}px;
    width: ${MOBILE_HEIGHT}px;
    background: ${theme.colors.cornflowerBlue};
    border-top-right-radius: ${theme.borderRadius[20]};
    border-bottom-right-radius: ${theme.borderRadius[20]};
    overflow: hidden;

    /* Ensure Logo overlays ::after pseudo element */
    > span {
      z-index: 1;
    }

    ::after {
      content: '';
      position: absolute;
      height: 100%;
      width: 100%;
      transform: translateY(50%);
      background: ${theme.colors.cornflowerBlueLight};
      border-top-left-radius: ${theme.borderRadius[16]};
    }

    @media ${devices.tablet} {
      height: ${TABLET_HEIGHT}px;
      width: ${TABLET_HEIGHT}px;
    }

    @media ${devices.laptop} {
      width: ${LAPTOP_WIDTH}px;
      height: ${LAPTOP_WIDTH}px;
    }
  `}
`;

export const UserContainer = styled.div`
  ${flexCenter}
  padding: 0 24px;
  border-left: 1px solid ${({ theme }) => theme.colors.baliHai};

  @media ${devices.tablet} {
    padding: 0 32px;
  }

  @media ${devices.laptop} {
    padding: 32px 0;
    border-left: none;
    border-top: 1px solid ${({ theme }) => theme.colors.baliHai};
  }
`;

export const ProfileImage = styled(NextImage)`
  border-radius: 50%;
  cursor: pointer;
`;

const POPUP_MENU_WIDTH = 150;

export const PopupMenu = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: 90%;
  right: -${POPUP_MENU_WIDTH}px;
  width: ${POPUP_MENU_WIDTH}px;
  background-color: white;
  transition: all 200ms ease-in-out;
  border-radius: ${({ theme }) => theme.borderRadius[8]};
  z-index: ${({ theme }) => theme.zIndex.modal};
  overflow: hidden;
  ${boldBoxShadow};

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      right: 8px;
    `}

  @media ${devices.laptop} {
    right: auto;
    top: auto;
    bottom: 32px;
    left: calc(${LAPTOP_WIDTH}px - ${POPUP_MENU_WIDTH}px);
    z-index: ${({ theme }) => theme.zIndex.dialog};

    ${({ $isOpen }) =>
      $isOpen &&
      css`
        right: auto;
        left: calc(${LAPTOP_WIDTH}px + 8px);
      `}
  }
`;

export const LinkContent = styled.a`
  ${Heading4}
  display: block;
  padding: 16px 24px;
  color: ${({ theme }) => theme.colors.shipCove};
  background-color: ${({ theme }) => theme.colors.selagoLight};
  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => theme.colors.selago};
  }
`;

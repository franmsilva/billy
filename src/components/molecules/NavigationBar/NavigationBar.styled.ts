import NextImage from 'next/image';
import styled, { css } from 'styled-components';

import { devices } from '@styles/mediaQueries';
import { flexCenter } from '@styles/snippets';

const MOBILE_HEIGHT = 72;
const TABLET_HEIGHT = 80;
const LAPTOP_WIDTH = 100;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: ${MOBILE_HEIGHT}px;
  z-index: ${({ theme }) => theme.zIndex.navbar};
  background-color: ${({ theme }) => theme.colors.slateGray};

  @media ${devices.tablet} {
    height: ${TABLET_HEIGHT}px;
  }

  @media ${devices.laptop} {
    height: 100vh;
    width: ${LAPTOP_WIDTH}px;
    position: fixed;
    top: 0;
    left: 0;
    border-top-right-radius: ${({ theme }) => theme.borderRadius[20]};
    border-bottom-right-radius: ${({ theme }) => theme.borderRadius[20]};
    overflow: hidden;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const LogoContainer = styled.div`
  ${({ theme }) => css`
    ${flexCenter}
    position: relative;
    width: ${MOBILE_HEIGHT}px;
    height: 100%;
    background: ${theme.colors.cornflowerBlue};
    border-top-right-radius: ${theme.borderRadius[20]};
    border-bottom-right-radius: ${theme.borderRadius[20]};
    overflow: hidden;

    // Ensure Logo overlays ::after pseudo element
    > span {
      z-index: 1;
    }

    ::after {
      content: '';
      position: absolute;
      height: 100%;
      width: 100%;
      top: calc(${MOBILE_HEIGHT}px / 2);
      background: ${theme.colors.cornflowerBlueLight};
      border-top-left-radius: ${theme.borderRadius[16]};
    }

    @media ${devices.tablet} {
      width: ${TABLET_HEIGHT}px;

      ::after {
        top: calc(${TABLET_HEIGHT}px / 2);
      }
    }

    @media ${devices.laptop} {
      width: 100%;
      height: ${LAPTOP_WIDTH}px;

      ::after {
        top: calc(${LAPTOP_WIDTH}px / 2);
      }
    }
  `}
`;

export const LogoShape = styled.div`
  position: absolute;
  background: ${({ theme }) => theme.colors.cornflowerBlue};
`;

export const UserContainer = styled.div`
  ${flexCenter}
  padding: 0 24px;
  border-left: 1px solid ${({ theme }) => theme.colors.baliHai};

  @media ${devices.tablet} {
    padding: 0 32px;
  }

  @media ${devices.laptop} {
    height: 90px;
    border-left: none;
    border-top: 1px solid ${({ theme }) => theme.colors.baliHai};
  }
`;

export const ProfileImage = styled(NextImage)`
  border-radius: 50%;
`;

import styled, { css } from 'styled-components';

export const Overlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: none;
  background-color: rgb(0, 0, 0, 0.5);
  transition: background 0.15s ease-in;
  z-index: ${({ theme }) => theme.zIndex.overlay};

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      display: block;
      background-color: rgb(0, 0, 0, 0.5);
    `}
`;

const DIALOG_WIDTH = '720px';

export const Body = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  height: 100vh;
  top: 0;
  left: -${DIALOG_WIDTH};
  width: ${DIALOG_WIDTH};
  background-color: white;
  z-index: ${({ theme }) => theme.zIndex.dialog};
  transition: left 0.2s ease-in-out;
  display: 'none';

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      left: 0;
    `}
`;

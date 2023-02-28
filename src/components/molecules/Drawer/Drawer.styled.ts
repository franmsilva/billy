import styled, { css } from 'styled-components';

const DIALOG_WIDTH = '720px';

export const Body = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  height: 100vh;
  top: 0;
  left: 0;
  width: ${DIALOG_WIDTH};
  background-color: white;
  z-index: ${({ theme }) => theme.zIndex.dialog};
  transition: left 0.2s ease-in-out;
  display: none;

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      display: block;
    `}
`;

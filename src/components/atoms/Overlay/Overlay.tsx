import styled, { css } from 'styled-components';

interface IOverlayProps {
  $isOpen: boolean;
}

const Overlay = styled.div<IOverlayProps>`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  opacity: 0;
  visibility: hidden;
  background-color: black;
  transition: opacity 0.15s ease-in;
  z-index: ${({ theme }) => theme.zIndex.overlay};

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      visibility: visible;
      opacity: 0.5;
    `}
`;

export default Overlay;

import styled, { css } from 'styled-components';

interface IOverlayProps {
  $isOpen: boolean;
}

const Overlay = styled.div<IOverlayProps>`
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

export default Overlay;

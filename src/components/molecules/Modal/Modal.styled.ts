import styled, { css } from 'styled-components';

export const Body = styled.div<{ $isOpen: boolean }>`
  width: 480px;
  height: 250px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  padding: 48px;
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius[8]};
  z-index: ${({ theme }) => theme.zIndex.modal};
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      opacity: 1;
    `}
`;

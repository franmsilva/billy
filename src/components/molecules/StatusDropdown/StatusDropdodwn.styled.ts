import styled, { css } from 'styled-components';

import { default as UnstyledButton } from '@components/atoms/Button';
import { boldBoxShadow } from '@styles/snippets';

export const Container = styled.div`
  position: relative;
  width: fit-content;
`;

export const Button = styled(UnstyledButton)<{ $isOpen }>`
  > span {
    margin: 0;
    background-color: transparent;
    transition: transform 200ms ease-in-out;

    ${({ $isOpen }) =>
      $isOpen &&
      css`
        transform: rotate(-180deg);
      `}
  }
`;

export const Popover = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  max-height: 0;
  padding: 0 24px;
  width: 200px;
  overflow: hidden;
  list-style-type: none;
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius[8]};
  transition: max-height 200ms ease-in-out, padding 200ms ease-in-out;
  z-index: ${({ theme }) => theme.zIndex.overlay};
  ${boldBoxShadow}

  > label:not(:last-child) {
    margin-bottom: 12px;
  }

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      max-height: 200px;
      padding: 24px;
    `}
`;

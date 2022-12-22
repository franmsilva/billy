import styled, { css } from 'styled-components';

import { default as UnstyledButton } from '@components/atoms/Button';

export const Container = styled.div`
  position: relative;
  width: fit-content;
`;

export const Button = styled(UnstyledButton)<{ $isOpen }>`
  > span {
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
  background-color: white;
  list-style-type: none;
  border-radius: ${({ theme }) => theme.borderRadius[8]};
  transition: max-height 200ms ease-in-out, padding 200ms ease-in-out;
  overflow: hidden;
  box-shadow: 0px 10px 20px rgba(72, 84, 159, 0.25);

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

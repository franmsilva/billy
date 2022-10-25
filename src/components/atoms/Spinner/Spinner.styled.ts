import styled, { css } from 'styled-components';

export const Spinner = styled.div<{ $size: number }>`
  ${({ $size }) => css`
    display: inline-block;
    width: ${$size}px;
    height: ${$size}px;
    border: 3px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    border-top-color: white;
    animation: spin 1s ease-in-out infinite;

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }
  `}
`;

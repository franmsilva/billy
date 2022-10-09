import { css } from 'styled-components';

export const Heading1 = css`
  ${({ theme }) => theme.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  letter-spacing: -1px;
`;

export const Heading2 = css`
  ${({ theme }) => theme.fontSize['xl']};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  letter-spacing: -0.625px;
`;

export const Heading3 = css`
  ${({ theme }) => theme.fontSize['l']};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  letter-spacing: -0.8px;
`;

export const Heading4 = css`
  ${({ theme }) => theme.fontSize['base']};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  letter-spacing: -0.25px;
`;

export const Body = css`
  ${({ theme }) => theme.fontSize['base']};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  letter-spacing: -0.25px;
`;

export const BodySm = css`
  ${({ theme }) => theme.fontSize['sm']};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  letter-spacing: -0.23px;
`;

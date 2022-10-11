import { css } from 'styled-components';

const baseFont = css`
  color: ${({ theme }) => theme.colors.vulcan};
`;

export const Heading1 = css`
  ${baseFont}
  ${({ theme }) => theme.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  letter-spacing: -1px;
`;

export const Heading2 = css`
  ${baseFont}
  ${({ theme }) => theme.fontSize['xl']};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  letter-spacing: -0.625px;
`;

export const Heading3 = css`
  ${baseFont}
  ${({ theme }) => theme.fontSize['l']};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  letter-spacing: -0.8px;
`;

export const Heading4 = css`
  ${baseFont}
  ${({ theme }) => theme.fontSize['base']};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  letter-spacing: -0.25px;
`;

export const Body = css`
  ${baseFont}
  ${({ theme }) => theme.fontSize['base']};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  letter-spacing: -0.25px;
`;

export const BodySm = css`
  ${baseFont}
  ${({ theme }) => theme.fontSize['sm']};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  letter-spacing: -0.23px;
`;

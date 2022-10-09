import styled from 'styled-components';

export const Heading1 = styled.h1`
  ${({ theme }) => theme.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  letter-spacing: -1px;
`;

export const Heading2 = styled.h2`
  ${({ theme }) => theme.fontSize['xl']};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  letter-spacing: -0.625px;
`;

export const Heading3 = styled.h3`
  ${({ theme }) => theme.fontSize['l']};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  letter-spacing: -0.8px;
`;

export const Heading4 = styled.h4`
  ${({ theme }) => theme.fontSize['base']};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  letter-spacing: -0.25px;
`;

export const Body1 = styled.p`
  ${({ theme }) => theme.fontSize['base']};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  letter-spacing: -0.25px;
`;

export const Body2 = styled.p`
  ${({ theme }) => theme.fontSize['sm']};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  letter-spacing: -0.23px;
`;

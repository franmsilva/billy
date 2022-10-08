import styled from 'styled-components';

export const Header = styled.header`
  min-height: 60px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors['gray-dark']};
`;

export const Heading = styled.h1`
  margin: 0;
  font-family: ${({ theme }) => theme.colors['gray-dark']};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: 20px;
  padding: 16px 0;
`;

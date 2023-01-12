import styled from 'styled-components';

import Typography from '@components/atoms/Typography';
import { boxShadow } from '@styles/snippets';

export const FormWrapper = styled.div`
  background-color: #ffffff;
  border-radius: ${({ theme }) => theme.borderRadius[8]};
  padding: 2rem;
  ${boxShadow}
`;

export const Subheading = styled(Typography)`
  text-transform: capitalize;
`;

export const Paragraph = styled.p`
  text-align: center;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.cornflowerBlue};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  cursor: pointer;
  text-transform: capitalize;
`;

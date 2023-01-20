import styled from 'styled-components';

import Button from '@components/atoms/Button';
import Input from '@components/atoms/Input';
import Typography from '@components/atoms/Typography';
import { boxShadow } from '@styles/snippets';

export const FormWrapper = styled.div`
  background-color: #ffffff;
  border-radius: ${({ theme }) => theme.borderRadius[8]};
  padding: 2rem;
  ${boxShadow}
`;

export const Paragraph = styled(Typography)`
  text-align: center;
`;

export const LinkContent = styled.a`
  color: ${({ theme }) => theme.colors.cornflowerBlue};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  cursor: pointer;
  text-transform: capitalize;
`;

export const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.sienna};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin: 0 0 1rem;
`;
export const SubmitButton = styled(Button)`
  margin-top: 1.5rem;
`;

export const FormInput = styled(Input)`
  margin-bottom: 1rem;
`;

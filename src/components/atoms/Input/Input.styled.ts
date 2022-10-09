import styled from 'styled-components';

import Typography, { Heading4 } from '@components/atoms/Typography';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 100%;
  height: 48px;
  padding: 16px 20px;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.selago};
  border-radius: ${({ theme }) => theme.borderRadius[5]};
  ${Heading4}
`;

export const Label = styled(Typography)`
  color: ${({ theme }) => theme.colors.shipCove};
  margin-bottom: 10px;
`;

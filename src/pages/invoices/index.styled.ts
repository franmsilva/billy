import styled from 'styled-components';

import { default as UnstyledButton } from '@src/components/atoms/Button';
import Typography from '@src/components/atoms/Typography';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 64px;
`;

export const Headings = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Subheading = styled(Typography)`
  color: ${({ theme }) => theme.colors.baliHai};
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled(UnstyledButton)`
  margin-left: 40px;
`;

import styled from 'styled-components';

import Typography from '@components/atoms/Typography';
import { flexCenter } from '@styles/snippets';

export const EmptyListContainer = styled.div`
  ${flexCenter}
  flex-direction: column;
`;

export const IllustrationContainer = styled.div`
  margin-bottom: 4rem;
`;

export const Heading = styled(Typography)`
  margin: 0;
`;

export const Paragraph = styled(Typography)`
  color: ${({ theme }) => theme.colors.baliHai};
  text-align: center;
  width: 241px;
`;

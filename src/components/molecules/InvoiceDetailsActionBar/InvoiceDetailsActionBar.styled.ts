import styled from 'styled-components';

import Typography from '@components/atoms/Typography';
import { mildBoxShadow } from '@styles/snippets';

const Container = styled.div`
  ${mildBoxShadow}
  width: 100%;
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius[8]};
`;

export const BackLinkContent = styled.span`
  align-self: flex-start;
  margin-bottom: 32px;
  cursor: pointer;
`;

export const BackLinkCopy = styled(Typography)`
  padding-top: 3px;
  margin-left: 24px;
`;

export const MetaBar = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 88px;
  padding: 24px 32px;
  margin-bottom: 24px;
`;

export const StatusContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  align-items: center;
  column-gap: 16px;
`;

export const StatusLabel = styled(Typography)`
  color: ${({ theme }) => theme.colors.baliHai};
`;

export const ActionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  column-gap: 8px;
`;

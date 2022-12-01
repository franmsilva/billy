import styled from 'styled-components';

import Typography from '@components/atoms/Typography';

export const Heading = styled(Typography)`
  margin: 0 0 12px;
`;

export const Copy = styled(Typography)`
  margin: 0 0 16px;
`;

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  > button:first-of-type {
    margin-right: 8px;
  }
`;

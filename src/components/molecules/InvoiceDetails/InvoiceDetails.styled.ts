import styled from 'styled-components';

import { mildBoxShadow } from '@styles/snippets';

const Container = styled.div`
  ${mildBoxShadow}
  width: 100%;
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius[8]};
`;

export const InvoiceDetails = styled(Container).attrs(() => ({
  as: 'article',
}))`
  padding: 48px;
`;

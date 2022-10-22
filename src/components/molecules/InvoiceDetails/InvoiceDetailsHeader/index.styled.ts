import styled from 'styled-components';

import Typography from '@components/atoms/Typography';

export const InvoiceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const InvoiceMeta = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Code = styled(Typography)`
  text-transform: uppercase;
`;

export const CompanyDetails = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
`;

export const ImageWrapper = styled.div`
  padding-bottom: 8px;
`;

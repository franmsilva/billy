import styled from 'styled-components';

export const ClientDetails = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1.25fr;
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 24px;
  margin-bottom: 40px;
`;

export const LabelledDetail = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InvoiceDate = styled(LabelledDetail)``;

export const PaymentDate = styled(LabelledDetail)`
  grid-row-start: 2;
`;

export const BillTo = styled(LabelledDetail)`
  grid-row: 1 / 3;
`;

export const SendTo = styled(LabelledDetail)``;

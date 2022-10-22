import styled from 'styled-components';

import Typography, { Body } from '@components/atoms/Typography';

export const InvoiceItemsContainer = styled.section`
  display: flex;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.borderRadius[8]};
  background-color: ${({ theme }) => theme.colors.selagoLight};
  overflow: hidden;
`;

export const TableContainer = styled.div`
  padding: 32px 32px 8px;
`;

export const Table = styled.table`
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
`;

export const THead = styled.thead``;

export const HeaderCell = styled.th`
  ${Body}
  text-align: left;
  color: ${({ theme }) => theme.colors.shipCove};
  padding-bottom: 32px;
`;

export const HeaderCellRightAlign = styled(HeaderCell)`
  text-align: right;
`;

export const TBody = styled.tbody``;

export const BodyCell = styled.td`
  display: flex;
  padding-bottom: 32px;
`;

export const BodyCellRightAlign = styled(BodyCell)`
  justify-content: flex-end;
`;

export const Row = styled.tr`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
`;

export const Total = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.slateGray};
  padding: 24px 32px;
`;

export const TotalAmount = styled(Typography)`
  font-size: 24px;
  color: white;
`;

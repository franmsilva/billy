import styled from 'styled-components';

import Typography, { Body } from '@src/components/atoms/Typography';

export const Table = styled.table`
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
`;

export const THead = styled.thead``;

export const HeaderCell = styled.th`
  ${Body}
  text-align: left;
  padding-bottom: 16px;
  color: ${({ theme }) => theme.colors.shipCove};
`;

export const TBody = styled.tbody``;

export const BodyCell = styled.td`
  display: flex;
  padding-bottom: 16px;
`;

export const BodyCellCentered = styled(BodyCell)`
  justify-content: flex-end;
`;

export const Row = styled.tr`
  display: grid;
  grid-template-columns: 40% 15% 25% 15% 5%;

  ${BodyCell}:not(:last-child) {
    padding-right: 16px;
  }
`;

export const Total = styled(Typography)`
  color: ${({ theme }) => theme.colors.shipCove};
`;

export const IconButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

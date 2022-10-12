import { FC } from 'react';

import { useInvoiceFormContext } from '@src/contexts/CreateInvoiceFormContext';

import InvoiceItemsRow from './InvoiceItemsRow';
import * as S from './InvoiceItemsTable.styled';

const InvoiceItemsTable: FC = () => {
  const { invoiceItems, handleInvoiceItemChange, handleInvoiceItemDelete } =
    useInvoiceFormContext();

  return (
    <S.Table>
      <S.THead>
        <S.Row>
          <S.HeaderCell>Item Name</S.HeaderCell>
          <S.HeaderCell>Qty.</S.HeaderCell>
          <S.HeaderCell>Price</S.HeaderCell>
          <S.HeaderCell>Total</S.HeaderCell>
          <S.HeaderCell />
        </S.Row>
      </S.THead>
      <S.TBody>
        {invoiceItems.map((item, index) => {
          return (
            <InvoiceItemsRow
              key={`table-row-${index}`}
              item={item}
              index={index}
              handleChange={handleInvoiceItemChange}
              handleDelete={handleInvoiceItemDelete}
            />
          );
        })}
      </S.TBody>
    </S.Table>
  );
};

export default InvoiceItemsTable;

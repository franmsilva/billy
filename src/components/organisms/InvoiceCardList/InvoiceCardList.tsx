import { FC } from 'react';

import InvoiceCard from '@components/molecules/InvoiceCard';
import { Invoice } from '@types';

import * as S from './InvoiceCardList.styled';

interface IInvoiceCardListProps {
  invoices: Invoice.IModel[];
}

const InvoiceCardList: FC<IInvoiceCardListProps> = ({ invoices }) => (
  <S.List>
    {invoices.map((invoice) => (
      <InvoiceCard key={invoice.id} {...invoice} />
    ))}
  </S.List>
);

export default InvoiceCardList;

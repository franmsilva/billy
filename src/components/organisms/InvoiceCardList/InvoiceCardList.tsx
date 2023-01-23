import { FC } from 'react';

import EmptyInvoiceList from '@components/molecules/EmptyInvoiceList';
import InvoiceCard from '@components/molecules/InvoiceCard';
import { Invoice } from '@types';

import * as S from './InvoiceCardList.styled';

interface IInvoiceCardListProps {
  invoices: Invoice.IModel[];
}

const InvoiceCardList: FC<IInvoiceCardListProps> = ({ invoices }) => (
  <S.List>
    {invoices.length > 0 ? (
      invoices.map((invoice) => <InvoiceCard key={invoice.id} {...invoice} />)
    ) : (
      <EmptyInvoiceList />
    )}
  </S.List>
);

export default InvoiceCardList;

import { FC } from 'react';

import { Invoice } from '@types';

import * as S from './InvoiceDetails.styled';
import InvoiceDetailsClient from './InvoiceDetailsClient';
import InvoiceDetailsHeader from './InvoiceDetailsHeader';
import InvoiceDetailsItems from './InvoiceDetailsItems';

interface IInvoiceDetailsProps {
  invoice: Invoice.IModel;
}

const InvoiceDetails: FC<IInvoiceDetailsProps> = ({ invoice }) => (
  <S.InvoiceDetails>
    <InvoiceDetailsHeader code={invoice.code} projectDescription={invoice.projectDescription} />
    <InvoiceDetailsClient
      invoiceDate={invoice.invoiceDate}
      paymentDate={invoice.paymentDate}
      name={invoice.name}
      email={invoice.email}
      address={invoice.address}
    />
    <InvoiceDetailsItems invoiceItems={invoice.invoiceItems} total={invoice.total} />
  </S.InvoiceDetails>
);

export default InvoiceDetails;

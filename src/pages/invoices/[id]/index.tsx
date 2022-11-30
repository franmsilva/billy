import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/router';
import { FC } from 'react';

import Typography from '@components/atoms/Typography';
import Drawer from '@components/molecules/Drawer';
import InvoiceDetails from '@components/molecules/InvoiceDetails';
import InvoiceDetailsActionBar from '@components/molecules/InvoiceDetailsActionBar/InvoiceDetailsActionBar';
import EditInvoiceForm from '@components/organisms/EditInvoiceForm';
import { ETypographyVariant } from '@enums/typography';
import CoreLayout from '@src/layouts/core';
import { Invoice } from '@types';

const InvoicesPage: FC = () => {
  const { query } = useRouter();
  const invoiceId = query.id as string;

  const { data, error } = useQuery(['invoices', invoiceId], () =>
    axios.get<Invoice.IModel>(`/api/invoices/${invoiceId}`).then((data) => data.data)
  );

  if (error) {
    return <Typography displayAs={ETypographyVariant.H3}>{`Oopsy: ${error}`}</Typography>;
  }

  return (
    <CoreLayout>
      <InvoiceDetailsActionBar invoiceId={invoiceId} invoiceStatus={data?.status} />
      {data && (
        <>
          <InvoiceDetails invoice={data} />
          <Drawer>
            <EditInvoiceForm invoice={data} />
          </Drawer>
        </>
      )}
    </CoreLayout>
  );
};

export default InvoicesPage;

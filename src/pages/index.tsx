import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/router';
import QueryString from 'qs';
import { FC } from 'react';

import Typography from '@components/atoms/Typography';
import Drawer from '@components/molecules/Drawer';
import InvoiceListActionBar from '@components/molecules/InvoiceListActionBar';
import CreateInvoiceForm from '@components/organisms/CreateInvoiceForm';
import InvoiceCardList from '@components/organisms/InvoiceCardList';
import { ETypographyVariant } from '@enums/typography';
import CoreLayout from '@src/layouts/core';
import { Invoice } from '@types';

const DEFAULT_QUERY_KEY = 'All';

const InvoicesPage: FC = () => {
  const { query } = useRouter();
  const { data, error } = useQuery(['invoices', query.status || DEFAULT_QUERY_KEY], () =>
    axios
      .get<{ invoices: Invoice.IModel[] }>(`/api/invoices?${QueryString.stringify(query)}`)
      .then((data) => data.data)
  );

  if (error) {
    return <Typography displayAs={ETypographyVariant.H3}>Oopsy</Typography>;
  }

  return (
    <CoreLayout>
      <InvoiceListActionBar invoiceCount={data?.invoices.length ?? 0} />
      {data ? (
        <InvoiceCardList invoices={data.invoices} />
      ) : (
        <Typography displayAs={ETypographyVariant.H3}>Loading...</Typography>
      )}
      <Drawer>
        <CreateInvoiceForm />
      </Drawer>
    </CoreLayout>
  );
};

export default InvoicesPage;

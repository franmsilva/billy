import axios from 'axios';
import { FC } from 'react';
import useSWR from 'swr';

import { EButtonTheme } from '@src/components/atoms/Button';
import Typography from '@src/components/atoms/Typography';
import InvoiceCard from '@src/components/molecules/InvoiceCard';
import CoreLayout from '@src/layouts/core';
import { IInvoice } from '@src/types/invoice';
import { ETypography } from '@src/types/typography';

import * as S from './index.styled';

const fetcher = (url) => axios.get(url).then((res) => res.data);

const InvoicesPage: FC = () => {
  const { data, error } = useSWR<{ invoices: IInvoice[] }>('/api/invoices', fetcher);

  if (error) {
    return <Typography displayAs={ETypography.H3}>Oopsy</Typography>;
  }

  if (!data) {
    return <Typography displayAs={ETypography.H3}>Loading...</Typography>;
  }

  const openCreateInvoiceForm = () => {
    console.log('Should open create invoice form...');
  };

  return (
    <CoreLayout>
      <S.Header>
        <S.Headings>
          <Typography displayAs={ETypography.H1}>Invoices</Typography>
          <S.Subheading
            displayAs={ETypography.Body}
          >{`There are ${data.invoices.length} total invoices`}</S.Subheading>
        </S.Headings>
        <S.Actions>
          {/* TODO: Turn into dropdown */}
          <Typography displayAs={ETypography.H4}>Filter by status</Typography>
          <S.Button
            icon="/icon-plus.svg"
            $theme={EButtonTheme.Primary}
            onClick={openCreateInvoiceForm}
          >
            New Invoice
          </S.Button>
        </S.Actions>
      </S.Header>
      <S.InvoiceCardList>
        {data.invoices.map((invoice) => (
          <InvoiceCard key={invoice.id} {...invoice} />
        ))}
        {data.invoices.map((invoice) => (
          <InvoiceCard key={invoice.id} {...invoice} />
        ))}
        {data.invoices.map((invoice) => (
          <InvoiceCard key={invoice.id} {...invoice} />
        ))}
        {data.invoices.map((invoice) => (
          <InvoiceCard key={invoice.id} {...invoice} />
        ))}
        {data.invoices.map((invoice) => (
          <InvoiceCard key={invoice.id} {...invoice} />
        ))}
        {data.invoices.map((invoice) => (
          <InvoiceCard key={invoice.id} {...invoice} />
        ))}
      </S.InvoiceCardList>
    </CoreLayout>
  );
};

export default InvoicesPage;

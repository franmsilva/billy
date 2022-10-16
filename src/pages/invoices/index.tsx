import axios from 'axios';
import { FC } from 'react';
import useSWR from 'swr';

import { EButtonTheme } from '@components/atoms/Button';
import Typography from '@components/atoms/Typography';
import InvoiceCardList from '@components/organisms/InvoiceCardList';
import { ETypographyVariant } from '@enums/typography';
import CoreLayout from '@src/layouts/core';
import { Invoice } from '@types';

import * as S from './index.styled';

const fetcher = (url) => axios.get(url).then((res) => res.data);

const InvoicesPage: FC = () => {
  const { data, error } = useSWR<{ invoices: Invoice.IModel[] }>('/api/invoices', fetcher);

  if (error) {
    return <Typography displayAs={ETypographyVariant.H3}>Oopsy</Typography>;
  }

  const openCreateInvoiceForm = () => {
    console.log('Should open create invoice form...');
  };

  return (
    <CoreLayout>
      <S.Header>
        <S.Headings>
          <Typography displayAs={ETypographyVariant.H1}>Invoices</Typography>
          {data && (
            <S.Subheading
              displayAs={ETypographyVariant.Body}
            >{`There are ${data.invoices.length} total invoices`}</S.Subheading>
          )}
        </S.Headings>
        <S.Actions>
          {/* TODO: Turn into dropdown */}
          <Typography displayAs={ETypographyVariant.H4}>Filter by status</Typography>
          <S.Button
            icon="/icon-plus.svg"
            $theme={EButtonTheme.Primary}
            onClick={openCreateInvoiceForm}
          >
            New Invoice
          </S.Button>
        </S.Actions>
      </S.Header>
      {data ? (
        <InvoiceCardList invoices={data.invoices} />
      ) : (
        <Typography displayAs={ETypographyVariant.H3}>Loading...</Typography>
      )}
    </CoreLayout>
  );
};

export default InvoicesPage;

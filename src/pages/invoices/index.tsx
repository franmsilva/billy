import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { FC } from 'react';

import { EButtonTheme } from '@components/atoms/Button';
import Typography from '@components/atoms/Typography';
import InvoiceCardList from '@components/organisms/InvoiceCardList';
import { ETypographyVariant } from '@enums/typography';
import { EContentDrawerForm, useContentDrawerContext } from '@src/contexts/ContentDrawerContext';
import CoreLayout from '@src/layouts/core';
import { Invoice } from '@types';

import * as S from './index.styled';

const InvoicesPage: FC = () => {
  const { data, error } = useQuery(['invoices'], () =>
    axios.get<{ invoices: Invoice.IModel[] }>('/api/invoices').then((data) => data.data)
  );
  const { openContentDrawer } = useContentDrawerContext();

  if (error) {
    return <Typography displayAs={ETypographyVariant.H3}>Oopsy</Typography>;
  }

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
            onClick={() => openContentDrawer(EContentDrawerForm.CreateInvoice)}
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

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

import Button, { EButtonTheme } from '@components/atoms/Button';
import Status from '@components/atoms/Status';
import Typography from '@components/atoms/Typography';
import InvoiceDetails from '@components/molecules/InvoiceDetails';
import { EInvoiceStatus } from '@enums/invoices';
import { ETypographyVariant } from '@enums/typography';
import CoreLayout from '@src/layouts/core';
import { Invoice } from '@types';

import * as S from './index.styled';

const InvoicesPage: FC = () => {
  const { query } = useRouter();
  const queryClient = useQueryClient();
  const invoiceId = query.id as string;

  const { data, error } = useQuery(['invoices', invoiceId], () =>
    axios.get<Invoice.IModel>(`/api/invoices/${invoiceId}`).then((data) => data.data)
  );

  const updateInvoiceMutation = useMutation(
    (payload: Partial<Invoice.IFormData>) => axios.put(`/api/invoices/${invoiceId}`, payload),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['invoices', invoiceId]);
      },
    }
  );

  const markInvoiceAsPaid = () => updateInvoiceMutation.mutate({ status: EInvoiceStatus.Paid });

  if (error) {
    return <Typography displayAs={ETypographyVariant.H3}>{`Oopsy: ${error}`}</Typography>;
  }

  const editInvoice = () => {
    console.log('Should probably open edit drawer...');
  };

  const deleteInvoice = () => {
    console.log('Should probably open confirm delete modal...');
  };

  // Link content needs to be wrapped in a span wrapper
  // due to Link component only supporting one child
  const renderLinkContent = () => (
    <S.BackLinkContent>
      <Image alt="Go back" src="/icon-arrow-left.svg" height={12} width={10} />
      <S.BackLinkCopy displayAs={ETypographyVariant.H4}>Go Back</S.BackLinkCopy>
    </S.BackLinkContent>
  );

  return (
    <CoreLayout>
      <Link href="/invoices">{renderLinkContent()}</Link>
      <S.MetaBar>
        <S.StatusContainer>
          <S.StatusLabel displayAs={ETypographyVariant.Body}>Status:</S.StatusLabel>
          {data && <Status status={data.status} />}
        </S.StatusContainer>
        <S.ActionsContainer>
          <Button $theme={EButtonTheme.Tertiary} onClick={editInvoice}>
            Edit
          </Button>
          <Button $theme={EButtonTheme.Danger} onClick={deleteInvoice}>
            Delete
          </Button>
          {data?.status !== EInvoiceStatus.Paid && (
            <Button $theme={EButtonTheme.Primary} onClick={markInvoiceAsPaid}>
              Mark as Paid
            </Button>
          )}
        </S.ActionsContainer>
      </S.MetaBar>
      {data && <InvoiceDetails invoice={data} />}
    </CoreLayout>
  );
};

export default InvoicesPage;

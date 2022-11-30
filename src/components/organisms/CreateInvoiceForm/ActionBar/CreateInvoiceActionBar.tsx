import { useMutation } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';
import { useRouter } from 'next/router';
import { FC, MouseEventHandler } from 'react';

import Button, { EButtonTheme } from '@components/atoms/Button';
import { EInvoiceStatus } from '@enums/invoices';
import { useContentDrawerContext } from '@src/contexts/ContentDrawerContext';
import { useInvoiceFormContext } from '@src/contexts/InvoiceFormContext';
import { Invoice } from '@types';

import * as S from './CreateInvoiceActionBar.styled';

const CREATE_BTN_NAME = 'create';
const CREATE_DRAFT_BTN_NAME = 'create-draft';

const CreateInvoiceActionBar: FC = () => {
  const router = useRouter();
  const { client, terms, invoiceItems } = useInvoiceFormContext();
  const { closeContentDrawer } = useContentDrawerContext();

  const updateInvoiceMutation = useMutation(
    (payload: Invoice.IFormData) => axios.post(`/api/invoices`, payload),
    {
      onSuccess: async (data: AxiosResponse<Invoice.IModel>) => {
        closeContentDrawer();
        router.push(`/invoices/${data.data.id}`);
      },
    }
  );

  const createInvoice: MouseEventHandler = (e) => {
    e.preventDefault();

    const isDraft = (e.target as HTMLButtonElement).name === CREATE_DRAFT_BTN_NAME;

    updateInvoiceMutation.mutate({
      status: isDraft ? EInvoiceStatus.Draft : EInvoiceStatus.Pending,
      client,
      terms,
      invoiceItems,
    });
  };

  return (
    <S.Footer>
      <Button $theme={EButtonTheme.Tertiary} onClick={closeContentDrawer}>
        Discard
      </Button>
      <S.PrimaryActionsGroup>
        <Button
          name={CREATE_DRAFT_BTN_NAME}
          $theme={EButtonTheme.Secondary}
          onClick={createInvoice}
        >
          Save as Draft
        </Button>
        <Button name={CREATE_BTN_NAME} $theme={EButtonTheme.Primary} onClick={createInvoice}>
          Save & Send
        </Button>
      </S.PrimaryActionsGroup>
    </S.Footer>
  );
};

export default CreateInvoiceActionBar;

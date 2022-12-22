import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/router';
import { FC, MouseEventHandler } from 'react';

import Button, { EButtonTheme } from '@components/atoms/Button';
import { useContentDrawerContext } from '@src/contexts/ContentDrawerContext';
import { useInvoiceFormContext } from '@src/contexts/InvoiceFormContext';
import { Invoice } from '@types';

import * as S from './EditInvoiceActionBar.styled';

const EditInvoiceActionBar: FC = () => {
  const router = useRouter();
  const invoiceId = router.query.id as string;
  const queryClient = useQueryClient();
  const { client, terms, invoiceItems } = useInvoiceFormContext();
  const { closeContentDrawer } = useContentDrawerContext();

  const updateInvoiceMutation = useMutation(
    (payload: Partial<Invoice.IFormData>) => axios.put(`/api/invoices/${invoiceId}`, payload),
    {
      onSuccess: async () => {
        closeContentDrawer();
        queryClient.invalidateQueries(['invoices', invoiceId]);
      },
    }
  );

  const saveChanges: MouseEventHandler = (e) => {
    e.preventDefault();

    updateInvoiceMutation.mutate({
      client,
      terms,
      invoiceItems,
    });
  };

  return (
    <S.Container>
      <Button btnTheme={EButtonTheme.Tertiary} onClick={closeContentDrawer}>
        Cancel
      </Button>
      <Button btnTheme={EButtonTheme.Primary} onClick={saveChanges}>
        Save Changes
      </Button>
    </S.Container>
  );
};

export default EditInvoiceActionBar;

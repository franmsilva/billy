import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import Button, { EButtonTheme } from '@components/atoms/Button';
import Status from '@components/atoms/Status';
import { EInvoiceStatus } from '@enums/invoices';
import { ETypographyVariant } from '@enums/typography';
import { useContentDrawerContext } from '@src/contexts/ContentDrawerContext';
import { useModalContext } from '@src/contexts/ModalContext';
import { Invoice } from '@types';

import * as S from './InvoiceDetailsActionBar.styled';

// invoiceId will always exist in the URL
// invoiceStatus does not exist while query is in-flight
// invoiceCode does not exist while query is in-flight
interface IInvoiceDetailsActionBarProps {
  invoiceId: string;
  invoiceStatus?: EInvoiceStatus;
}

const InvoiceDetailsActionBar: FC<IInvoiceDetailsActionBarProps> = ({
  invoiceId,
  invoiceStatus,
}) => {
  const queryClient = useQueryClient();
  const { openContentDrawer } = useContentDrawerContext();
  const { openModal } = useModalContext();

  const updateInvoiceMutation = useMutation(
    (payload: Partial<Invoice.IFormData>) => axios.put(`/api/invoices/${invoiceId}`, payload),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['invoices', invoiceId]);
      },
    }
  );

  const markInvoiceAsPaid = () => updateInvoiceMutation.mutate({ status: EInvoiceStatus.Paid });

  // Link content needs to be wrapped in a span wrapper
  // due to Link component only supporting one child
  const renderLinkContent = () => (
    <S.BackLinkContent>
      <Image alt="Go back" src="/icon-arrow-left.svg" height={12} width={10} />
      <S.BackLinkCopy displayAs={ETypographyVariant.H4}>Go Back</S.BackLinkCopy>
    </S.BackLinkContent>
  );

  return (
    <>
      <Link href="/invoices">{renderLinkContent()}</Link>
      <S.MetaBar>
        <S.StatusContainer>
          <S.StatusLabel displayAs={ETypographyVariant.Body}>Status:</S.StatusLabel>
          {invoiceStatus && <Status status={invoiceStatus} />}
        </S.StatusContainer>
        <S.ActionsContainer>
          <Button $theme={EButtonTheme.Tertiary} onClick={openContentDrawer}>
            Edit
          </Button>
          <Button $theme={EButtonTheme.Danger} onClick={openModal}>
            Delete
          </Button>
          {invoiceStatus !== EInvoiceStatus.Paid && (
            <Button $theme={EButtonTheme.Primary} onClick={markInvoiceAsPaid}>
              Mark as Paid
            </Button>
          )}
        </S.ActionsContainer>
      </S.MetaBar>
    </>
  );
};

export default InvoiceDetailsActionBar;

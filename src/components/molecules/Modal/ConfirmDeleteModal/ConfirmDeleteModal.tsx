import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { useTheme } from 'styled-components';

import Button, { EButtonTheme } from '@components/atoms/Button';
import { ETypographyVariant } from '@enums/typography';
import { useModalContext } from '@src/contexts/ModalContext';

import Modal from '../Modal';

import * as S from './ConfirmDeteteModal.styled';

interface IConfirmDeleteModalProps {
  invoiceId: string;
  invoiceCode?: string;
}

const ConfirmDeleteModal: FC<IConfirmDeleteModalProps> = ({ invoiceId, invoiceCode }) => {
  const queryClient = useQueryClient();
  const theme = useTheme();
  const router = useRouter();
  const { closeModal } = useModalContext();

  const deleteInvoiceMutation = useMutation(() => axios.delete(`/api/invoices/${invoiceId}`), {
    onSuccess: () => {
      queryClient.invalidateQueries(['invoices', invoiceId]);
      router.push('/invoices');
    },
  });

  const deleteInvoice = () => deleteInvoiceMutation.mutate();

  return (
    <Modal>
      <S.Heading as="h1" displayAs={ETypographyVariant.H2}>
        Confirm Deletion
      </S.Heading>
      <S.Copy as="p" displayAs={ETypographyVariant.BodySm} $color={theme.colors.baliHai}>
        Are you sure you want to delete invoice #{invoiceCode}? This action cannot be undone
      </S.Copy>
      <S.ActionsContainer>
        <Button btnTheme={EButtonTheme.Tertiary} onClick={closeModal}>
          Cancel
        </Button>
        <Button btnTheme={EButtonTheme.Danger} onClick={deleteInvoice}>
          Delete
        </Button>
      </S.ActionsContainer>
    </Modal>
  );
};

export default ConfirmDeleteModal;

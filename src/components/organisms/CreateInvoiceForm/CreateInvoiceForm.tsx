import { useMutation } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';
import { useRouter } from 'next/router';
import { FC, MouseEventHandler } from 'react';

import { EInvoiceStatus } from '@enums/invoices';
import { ETypographyVariant } from '@enums/typography';
import Button from '@src/components/atoms/Button';
import { EButtonTheme } from '@src/components/atoms/Button/Button';
import Input from '@src/components/atoms/Input/Input';
import { useContentDrawerContext } from '@src/contexts/ContentDrawerContext';
import { useInvoiceFormContext } from '@src/contexts/InvoiceFormContext';
import { Invoice } from '@types';

import InvoiceItemsTable from '../../molecules/InvoiceItemsTable/InvoiceItemsTable';

import * as S from './CreateInvoiceForm.styled';

const CREATE_BTN_NAME = 'create';
const CREATE_DRAFT_BTN_NAME = 'create-draft';

const CreateInvoiceForm: FC = () => {
  const router = useRouter();
  const {
    client,
    terms,
    invoiceItems,
    handleClientFieldChange,
    handleTermsFieldChange,
    handleInvoiceItemAdd,
  } = useInvoiceFormContext();
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
    <S.Form>
      <S.Header as="h2" displayAs={ETypographyVariant.H2}>
        New Invoice
      </S.Header>
      <S.ScrollableContent>
        <S.FieldSet>
          <S.Subheading as="h4" displayAs={ETypographyVariant.H4}>
            Bill To
          </S.Subheading>
          <Input
            id="client-name"
            name="name"
            label="Client's Name"
            value={client.name}
            onChange={handleClientFieldChange}
          />
          <Input
            id="client-email"
            name="email"
            label="Client's Email"
            value={client.email}
            onChange={handleClientFieldChange}
          />
          <Input
            id="client-street"
            name="street"
            label="Street Address"
            value={client.address.street}
            onChange={handleClientFieldChange}
          />
          <S.Row>
            <Input
              id="client-city"
              name="city"
              label="City"
              value={client.address.city}
              onChange={handleClientFieldChange}
            />
            <Input
              id="client-postcode"
              name="postcode"
              label="Postcode"
              value={client.address.postcode}
              onChange={handleClientFieldChange}
            />
            <Input
              id="client-country"
              name="country"
              label="Country"
              value={client.address.country}
              onChange={handleClientFieldChange}
            />
          </S.Row>
        </S.FieldSet>
        <S.FieldSet>
          <S.Subheading as="h4" displayAs={ETypographyVariant.H4}>
            Terms
          </S.Subheading>
          <S.Row>
            <Input
              id="invoice-date"
              name="invoiceDate"
              label="Invoice Date"
              type="date"
              value={terms.invoiceDate}
              onChange={handleTermsFieldChange}
            />
            <Input
              id="payment-date"
              name="paymentDate"
              label="Payment Date"
              type="date"
              value={terms.paymentDate}
              onChange={handleTermsFieldChange}
            />
          </S.Row>
          <Input
            id="project-description"
            name="projectDescription"
            label="Project Description"
            value={terms.projectDescription}
            onChange={handleTermsFieldChange}
          />
        </S.FieldSet>
        <S.FieldSet>
          <S.Subheading as="h4" displayAs={ETypographyVariant.H4}>
            Item List
          </S.Subheading>
          <InvoiceItemsTable />
          <Button $theme={EButtonTheme.Tertiary} onClick={handleInvoiceItemAdd} fullWidth>
            + Add New Item
          </Button>
        </S.FieldSet>
      </S.ScrollableContent>
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
    </S.Form>
  );
};

export default CreateInvoiceForm;

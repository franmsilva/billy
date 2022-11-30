import { FC } from 'react';

import Button, { EButtonTheme } from '@components/atoms/Button';
import Input from '@components/atoms/Input';
import { ETypographyVariant } from '@enums/typography';
import { useInvoiceFormContext } from '@src/contexts/InvoiceFormContext';

import InvoiceItemsTable from '../InvoiceItemsTable';

import * as S from './InvoiceForm.styled';

const InvoiceForm: FC = () => {
  const { client, terms, handleClientFieldChange, handleTermsFieldChange, handleInvoiceItemAdd } =
    useInvoiceFormContext();

  return (
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
  );
};

export default InvoiceForm;

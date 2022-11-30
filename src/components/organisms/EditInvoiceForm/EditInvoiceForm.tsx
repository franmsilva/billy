import { FC } from 'react';

import InvoiceForm from '@components/molecules/InvoiceForm';
import { ETypographyVariant } from '@enums/typography';
import { InvoiceFormProvider } from '@src/contexts/InvoiceFormContext';
import { formatInvoiceModelToFormData } from '@src/utils/formatters/invoice';
import { Invoice } from '@types';

import EditInvoiceActionBar from './ActionBar';
import * as S from './EditInvoiceForm.styled';

interface IEditInvoiceFormProps {
  invoice: Invoice.IModel;
}

const EditInvoiceForm: FC<IEditInvoiceFormProps> = ({ invoice }) => (
  <InvoiceFormProvider initialFormState={formatInvoiceModelToFormData(invoice)}>
    <S.Form>
      <S.Header as="h2" displayAs={ETypographyVariant.H2}>
        Edit #{invoice.code.toUpperCase()}
      </S.Header>
      <InvoiceForm />
      <EditInvoiceActionBar />
    </S.Form>
  </InvoiceFormProvider>
);

export default EditInvoiceForm;

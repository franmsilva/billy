import { FC } from 'react';

import InvoiceForm from '@components/molecules/InvoiceForm';
import { ETypographyVariant } from '@enums/typography';
import { InvoiceFormProvider } from '@src/contexts/InvoiceFormContext';

import CreateInvoiceActionBar from './ActionBar/CreateInvoiceActionBar';
import * as S from './CreateInvoiceForm.styled';

const CreateInvoiceForm: FC = () => (
  <InvoiceFormProvider>
    <S.Form>
      <S.Header as="h2" displayAs={ETypographyVariant.H2}>
        New Invoice
      </S.Header>
      <InvoiceForm />
      <CreateInvoiceActionBar />
    </S.Form>
  </InvoiceFormProvider>
);

export default CreateInvoiceForm;

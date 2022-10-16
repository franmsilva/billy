import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { InvoiceFormProvider } from '@src/contexts/InvoiceFormContext';

import CreateInvoiceForm from './CreateInvoiceForm';

export default {
  title: 'Organisms/CreateInvoiceForm',
  component: CreateInvoiceForm,
} as ComponentMeta<typeof CreateInvoiceForm>;

const Template: ComponentStory<typeof CreateInvoiceForm> = (args) => (
  <InvoiceFormProvider>
    <CreateInvoiceForm {...args} />
  </InvoiceFormProvider>
);

export const Default = Template.bind({});

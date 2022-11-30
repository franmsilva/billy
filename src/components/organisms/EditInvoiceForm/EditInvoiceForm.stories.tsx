import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { InvoiceFormProvider } from '@src/contexts/InvoiceFormContext';

import EditInvoiceForm from './EditInvoiceForm';

export default {
  title: 'Organisms/EditInvoiceForm',
  component: EditInvoiceForm,
} as ComponentMeta<typeof EditInvoiceForm>;

const Template: ComponentStory<typeof EditInvoiceForm> = (args) => (
  <InvoiceFormProvider>
    <EditInvoiceForm {...args} />
  </InvoiceFormProvider>
);

export const Default = Template.bind({});

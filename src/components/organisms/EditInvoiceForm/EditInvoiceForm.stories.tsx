import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { mockInvoices } from '@mocks/invoices';

import EditInvoiceForm from './EditInvoiceForm';

export default {
  title: 'Organisms/EditInvoiceForm',
  component: EditInvoiceForm,
  args: {
    invoice: mockInvoices[0],
  },
} as ComponentMeta<typeof EditInvoiceForm>;

const Template: ComponentStory<typeof EditInvoiceForm> = (args) => <EditInvoiceForm {...args} />;

export const Default = Template.bind({});

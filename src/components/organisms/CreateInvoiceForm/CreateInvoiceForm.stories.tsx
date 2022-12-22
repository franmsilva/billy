import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import CreateInvoiceForm from './CreateInvoiceForm';

export default {
  title: 'Organisms/CreateInvoiceForm',
  component: CreateInvoiceForm,
} as ComponentMeta<typeof CreateInvoiceForm>;

const Template: ComponentStory<typeof CreateInvoiceForm> = (args) => (
  <CreateInvoiceForm {...args} />
);

export const Default = Template.bind({});

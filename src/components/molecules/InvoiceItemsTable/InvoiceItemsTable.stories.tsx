import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { InvoiceFormProvider } from '@src/contexts/InvoiceFormContext';

import InvoiceItemsTable from './InvoiceItemsTable';

export default {
  title: 'Molecules/InvoiceItemsTable',
  component: InvoiceItemsTable,
} as ComponentMeta<typeof InvoiceItemsTable>;

const Template: ComponentStory<typeof InvoiceItemsTable> = (args) => (
  <InvoiceFormProvider>
    <InvoiceItemsTable {...args} />
  </InvoiceFormProvider>
);

export const Default = Template.bind({});

import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { mockInvoices } from '@mocks/invoices';

import InvoiceCard from './InvoiceCardList';

export default {
  title: 'Organisms/InvoiceCardList',
  component: InvoiceCard,
  args: {
    invoices: mockInvoices,
  },
} as ComponentMeta<typeof InvoiceCard>;

const Template: ComponentStory<typeof InvoiceCard> = (args) => <InvoiceCard {...args} />;

export const Default = Template.bind({});

import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { EInvoiceStatus } from '@src/types/invoice';

import InvoiceCard from './InvoiceCard';

export default {
  title: 'Molecules/InvoiceCard',
  component: InvoiceCard,
  args: {
    id: '12345',
    code: 'RT3080',
    name: 'Fran Silva',
    paymentDate: '12-12-2021',
    total: 1239.99,
    status: EInvoiceStatus.Paid,
  },
} as ComponentMeta<typeof InvoiceCard>;

const Template: ComponentStory<typeof InvoiceCard> = (args) => <InvoiceCard {...args} />;

export const Default = Template.bind({});

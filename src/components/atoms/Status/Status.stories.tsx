import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { EInvoiceStatus } from '@src/types/invoice';

import Status from './Status';

export default {
  title: 'Atoms/Status',
  component: Status,
  argTypes: {
    status: {
      control: {
        type: 'select',
        options: EInvoiceStatus,
      },
    },
  },
} as ComponentMeta<typeof Status>;

const Template: ComponentStory<typeof Status> = (args) => <Status {...args} />;

export const Draft = Template.bind({});
Draft.args = {
  status: EInvoiceStatus.Draft,
};

export const Paid = Template.bind({});
Paid.args = {
  status: EInvoiceStatus.Paid,
};

export const Pending = Template.bind({});
Pending.args = {
  status: EInvoiceStatus.Pending,
};

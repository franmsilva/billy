import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import EmptyInvoiceList from './EmptyInvoiceList';

export default {
  title: 'Molecules/EmptyInvoiceList',
  component: EmptyInvoiceList,
} as ComponentMeta<typeof EmptyInvoiceList>;

const Template: ComponentStory<typeof EmptyInvoiceList> = (args) => <EmptyInvoiceList {...args} />;

export const Default = Template.bind({});

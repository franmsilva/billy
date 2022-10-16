import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Input from './Input';

export default {
  title: 'Atoms/Input',
  component: Input,
  argTypes: {
    id: {
      type: { name: 'string', required: true },
    },
    name: {
      type: { name: 'string', required: true },
    },
    label: {
      type: { name: 'string', required: false },
    },
    placeholder: {
      type: { name: 'string', required: false },
    },
    value: {
      type: { name: 'string', required: true },
    },
    onChange: {
      type: 'function',
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});

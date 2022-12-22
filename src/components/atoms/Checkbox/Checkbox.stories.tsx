import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import Checkbox from './Checkbox';

export default {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  argTypes: {
    label: {
      defaultValue: 'Label',
    },
    name: {
      defaultValue: 'Label',
    },
    isChecked: {
      defaultValue: false,
    },
    onClick: {
      action: 'Clicked',
    },
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});

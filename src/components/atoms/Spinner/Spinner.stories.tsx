import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import Spinner from './Spinner';

export default {
  title: 'Atoms/Spinner',
  component: Spinner,
  args: {
    size: 20,
  },
  argTypes: {
    size: {
      control: 'number',
    },
  },
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => <Spinner {...args} />;

export const Default = Template.bind({});
Default.parameters = {
  backgrounds: {
    default: 'dark',
  },
};

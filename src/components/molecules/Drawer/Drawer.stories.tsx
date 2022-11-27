import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import Drawer from './Drawer';

export default {
  title: 'Molecules/Drawer',
  component: Drawer,
  args: {
    isOpen: false,
  },
} as ComponentMeta<typeof Drawer>;

const Template: ComponentStory<typeof Drawer> = (args) => <Drawer {...args}>Content here</Drawer>;

export const Default = Template.bind({});

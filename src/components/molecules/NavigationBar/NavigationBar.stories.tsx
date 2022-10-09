import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import NavigationBar from './NavigationBar';

export default {
  title: 'NavigationBar',
  component: NavigationBar,
} as ComponentMeta<typeof NavigationBar>;

const Template: ComponentStory<typeof NavigationBar> = (args) => <NavigationBar {...args} />;

export const Default = Template.bind({});

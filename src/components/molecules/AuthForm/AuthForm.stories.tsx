import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import AuthForm from './AuthForm';

export default {
  title: 'Molecules/AuthForm',
  component: AuthForm,
} as ComponentMeta<typeof AuthForm>;

const Template: ComponentStory<typeof AuthForm> = (args) => <AuthForm {...args} />;

export const Default = Template.bind({});

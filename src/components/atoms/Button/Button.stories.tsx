import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import Button, { EButtonTheme } from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    theme: {
      control: {
        type: 'select',
        options: EButtonTheme,
      },
    },
    onClick: {
      action: 'Clicked',
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  theme: EButtonTheme.Primary,
  children: 'Primary',
};

export const PrimaryWithIcon = Template.bind({});
PrimaryWithIcon.args = {
  theme: EButtonTheme.Primary,
  children: 'Primary With Icon',

  icon: '/icon-plus.svg',
};

export const Secondary = Template.bind({});
Secondary.args = {
  theme: EButtonTheme.Secondary,
  children: 'Secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  theme: EButtonTheme.Tertiary,
  children: 'Tertiary',
};

export const Danger = Template.bind({});
Danger.args = {
  theme: EButtonTheme.Danger,
  children: 'Danger',
};

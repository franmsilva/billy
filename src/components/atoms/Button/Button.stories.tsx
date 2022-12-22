import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import Button, { EButtonTheme } from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    btnTheme: {
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
  btnTheme: EButtonTheme.Primary,
  children: 'Primary',
};

export const PrimaryWithIcon = Template.bind({});
PrimaryWithIcon.args = {
  btnTheme: EButtonTheme.Primary,
  children: 'Primary With Icon',
  icon: { src: '/icon-plus.svg' },
};

export const Secondary = Template.bind({});
Secondary.args = {
  btnTheme: EButtonTheme.Secondary,
  children: 'Secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  btnTheme: EButtonTheme.Tertiary,
  children: 'Tertiary',
};

export const Danger = Template.bind({});
Danger.args = {
  btnTheme: EButtonTheme.Danger,
  children: 'Danger',
};

export const Text = Template.bind({});
Text.args = {
  btnTheme: EButtonTheme.Text,
  children: 'Text',
  icon: {
    src: '/icon-arrow-down.svg',
    height: 10,
    width: 12,
  },
};

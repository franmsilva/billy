import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { StoryMarginWrapper } from '@styles/snippets';

import StatusDropdown from './StatusDropdown';

export default {
  title: 'Molecules/StatusDropdown',
  component: StatusDropdown,
} as ComponentMeta<typeof StatusDropdown>;

const Template: ComponentStory<typeof StatusDropdown> = () => (
  <StoryMarginWrapper>
    <StatusDropdown />
  </StoryMarginWrapper>
);

export const Default = Template.bind({});

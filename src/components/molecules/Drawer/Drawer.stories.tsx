import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import Button from '@components/atoms/Button';
import { useContentDrawerContext } from '@src/contexts/ContentDrawerContext';

import Drawer from './Drawer';

export default {
  title: 'Molecules/Drawer',
  component: Drawer,
} as ComponentMeta<typeof Drawer>;

const Template: ComponentStory<typeof Drawer> = () => {
  const { openContentDrawer } = useContentDrawerContext();

  return (
    <>
      <Button onClick={() => openContentDrawer()}>Open</Button>
      <Drawer>Anything can go here</Drawer>
    </>
  );
};

export const Default = Template.bind({});

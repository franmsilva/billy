import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import Button from '@components/atoms/Button';
import { EContentDrawerForm, useContentDrawerContext } from '@src/contexts/ContentDrawerContext';

import Drawer from './Drawer';

export default {
  title: 'Molecules/Drawer',
  component: Drawer,
} as ComponentMeta<typeof Drawer>;

const Template: ComponentStory<typeof Drawer> = () => {
  const { openContentDrawer } = useContentDrawerContext();

  return (
    <>
      <Button onClick={() => openContentDrawer(EContentDrawerForm.CreateInvoice)}>Open</Button>
      <Drawer />
    </>
  );
};

export const Default = Template.bind({});

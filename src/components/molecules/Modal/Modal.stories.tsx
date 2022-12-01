import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import Button from '@components/atoms/Button';
import { useModalContext } from '@src/contexts/ModalContext';

import Modal from './Modal';

export default {
  title: 'Molecules/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = () => {
  const { openModal } = useModalContext();

  return (
    <>
      <Button onClick={() => openModal()}>Open</Button>
      <Modal>
        <div>Anything can go here</div>
      </Modal>
    </>
  );
};

export const Default = Template.bind({});

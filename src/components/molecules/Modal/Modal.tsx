import { FC, ReactNode } from 'react';

import Overlay from '@components/atoms/Overlay';
import { useModalContext } from '@src/contexts/ModalContext';
import { useClickOutside } from '@src/hooks/useClickOutside';

import * as S from './Modal.styled';

interface IModalProps {
  children: ReactNode;
}

const Modal: FC<IModalProps> = ({ children }) => {
  const { isOpen, closeModal } = useModalContext();
  const ref = useClickOutside(closeModal);

  return (
    <>
      <Overlay $isOpen={isOpen} />
      <S.Body id="modal" $isOpen={isOpen} ref={ref}>
        {children}
      </S.Body>
    </>
  );
};

export default Modal;

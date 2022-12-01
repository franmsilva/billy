import { createContext, FC, MouseEvent, ReactNode, useContext, useState } from 'react';

interface IModalContext {
  isOpen: boolean;
  openModal: (event?: MouseEvent) => void;
  closeModal: (event?: MouseEvent) => void;
}

const ModalContext = createContext<IModalContext>({} as IModalContext);

export const useModalContext = () => {
  const modalContext = useContext(ModalContext);

  if (!Object.keys(modalContext).length) {
    throw new Error('Use within ModalProvider!');
  }

  return modalContext;
};

interface IModalProviverProps {
  children: ReactNode;
}

export const ModalProvider: FC<IModalProviverProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = (event) => {
    if (event) event.preventDefault();

    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        closeModal,
        openModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

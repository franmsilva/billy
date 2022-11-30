import { createContext, FC, MouseEvent, ReactNode, useContext, useState } from 'react';

interface IContentDrawerContext {
  isOpen: boolean;
  openContentDrawer: (event?: MouseEvent) => void;
  closeContentDrawer: (event?: MouseEvent) => void;
}

const ContentDrawerContext = createContext<IContentDrawerContext>({} as IContentDrawerContext);

export const useContentDrawerContext = () => {
  const contentDrawerContext = useContext(ContentDrawerContext);

  if (!Object.keys(contentDrawerContext).length) {
    throw new Error('Use within ContentDrawerContext!');
  }

  return contentDrawerContext;
};

interface IContentDrawerProviverProps {
  children: ReactNode;
}

export const ContentDrawerProvider: FC<IContentDrawerProviverProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeContentDrawer = (event) => {
    if (event) event.preventDefault();

    setIsOpen(false);
  };

  const openContentDrawer = () => {
    setIsOpen(true);
  };

  return (
    <ContentDrawerContext.Provider
      value={{
        isOpen,
        closeContentDrawer,
        openContentDrawer,
      }}
    >
      {children}
    </ContentDrawerContext.Provider>
  );
};

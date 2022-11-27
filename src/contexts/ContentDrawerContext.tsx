import {
  createContext,
  Dispatch,
  FC,
  MouseEventHandler,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';

interface IContentDrawerContext {
  isOpen: boolean;
  formType: EContentDrawerForm;
  setFormType: Dispatch<SetStateAction<EContentDrawerForm>>;
  openContentDrawer: (formType: EContentDrawerForm) => void;
  closeContentDrawer: MouseEventHandler;
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

export enum EContentDrawerForm {
  CreateInvoice = 'create-invoice',
  UpdateInvoice = 'update-invoice',
}

export const ContentDrawerProvider: FC<IContentDrawerProviverProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formType, setFormType] = useState(EContentDrawerForm.CreateInvoice);

  const closeContentDrawer = () => {
    setIsOpen(false);
  };

  const openContentDrawer = () => {
    setIsOpen(true);
  };

  return (
    <ContentDrawerContext.Provider
      value={{
        isOpen,
        formType,
        setFormType,
        closeContentDrawer,
        openContentDrawer,
      }}
    >
      {children}
    </ContentDrawerContext.Provider>
  );
};

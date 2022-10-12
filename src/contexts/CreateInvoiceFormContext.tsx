import { ChangeEvent, createContext, FC, ReactNode, useContext, useState } from 'react';

import { IInvoiceItem } from '@src/types/invoice';

interface IInvoiceFormData {
  client: {
    name: string;
    email: string;
    address: {
      street: string;
      city: string;
      postcode: string;
      country: string;
    };
  };
  terms: {
    invoiceDate: string;
    paymentDate: string;
    projectDescription: string;
  };
  invoiceItems: IInvoiceItem[];
}

interface IInvoiceFormContext extends IInvoiceFormData {
  handleClientFieldChange(e: ChangeEvent<HTMLInputElement>): void;
  handleTermsFieldChange(e: ChangeEvent<HTMLInputElement>): void;
  handleInvoiceItemChange(e: ChangeEvent<HTMLInputElement>, index: number): void;
  handleInvoiceItemAdd(): void;
  handleInvoiceItemDelete(index: number): void;
}

const defaultInvoiceFormState: IInvoiceFormData = {
  client: {
    name: '',
    email: '',
    address: {
      street: '',
      city: '',
      postcode: '',
      country: '',
    },
  },
  terms: {
    invoiceDate: '',
    paymentDate: '',
    projectDescription: '',
  },
  invoiceItems: [{ name: 'New Item', quantity: 0, price: 0 }],
};

const InvoiceFormContext = createContext<IInvoiceFormContext>({} as IInvoiceFormContext);

export const useInvoiceFormContext = () => {
  const invoiceFormContext = useContext(InvoiceFormContext);

  if (!invoiceFormContext) {
    throw new Error('Use within CreateInvoiceProvider!');
  }

  return invoiceFormContext;
};

interface IInvoiceFormProviderProps {
  initialFormState?: IInvoiceFormContext;
  children: ReactNode;
}

export const InvoiceFormProvider: FC<IInvoiceFormProviderProps> = ({
  initialFormState = defaultInvoiceFormState,
  children,
}) => {
  const [client, setClient] = useState(initialFormState.client);
  const [terms, setTerms] = useState(initialFormState.terms);
  const [invoiceItems, setInvoiceItems] = useState(initialFormState.invoiceItems);

  const handleClientFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newClient = { ...client };

    if (name !== 'name' && name !== 'email') {
      newClient.address[name] = value;
    } else {
      newClient[name] = value;
    }

    setClient(newClient);
  };

  const handleTermsFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newTerms = { ...terms };

    newTerms[name] = value;

    setTerms(newTerms);
  };

  const handleInvoiceItemChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const { name, value } = e.target;
    const data = [...invoiceItems];

    data[index][name] = value;

    setInvoiceItems(data);
  };

  const handleInvoiceItemAdd = () => {
    setInvoiceItems([...invoiceItems, { name: 'New Item', quantity: 0, price: 0 }]);
  };

  const handleInvoiceItemDelete = (index) => {
    const data = invoiceItems.filter((_item, itemIdx) => itemIdx !== index);

    setInvoiceItems(data);
  };

  return (
    <InvoiceFormContext.Provider
      value={{
        client,
        terms,
        invoiceItems,
        handleClientFieldChange,
        handleTermsFieldChange,
        handleInvoiceItemChange,
        handleInvoiceItemAdd,
        handleInvoiceItemDelete,
      }}
    >
      {children}
    </InvoiceFormContext.Provider>
  );
};

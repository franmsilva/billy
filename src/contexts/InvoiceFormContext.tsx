import {
  ChangeEvent,
  createContext,
  Dispatch,
  FC,
  MouseEventHandler,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';

import { EInvoiceStatus } from '@enums/invoices';
import { Invoice } from '@types';

interface IInvoiceFormContext extends Invoice.IFormData {
  setStatus: Dispatch<SetStateAction<EInvoiceStatus>>;
  handleClientFieldChange(e: ChangeEvent<HTMLInputElement>): void;
  handleTermsFieldChange(e: ChangeEvent<HTMLInputElement>): void;
  handleInvoiceItemChange(e: ChangeEvent<HTMLInputElement>, index: number): void;
  handleInvoiceItemAdd: MouseEventHandler;
  handleInvoiceItemDelete(index: number): void;
}

const defaultInvoiceFormState: Invoice.IFormData = {
  status: EInvoiceStatus.Draft,
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

  if (!Object.keys(invoiceFormContext).length) {
    throw new Error('Use within InvoiceFormProvider!');
  }

  return invoiceFormContext;
};

interface IInvoiceFormProviderProps {
  initialFormState?: Invoice.IFormData;
  children: ReactNode;
}

export const InvoiceFormProvider: FC<IInvoiceFormProviderProps> = ({
  initialFormState = defaultInvoiceFormState,
  children,
}) => {
  const [status, setStatus] = useState(initialFormState.status);
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

  const handleInvoiceItemAdd = (e) => {
    e.preventDefault();
    setInvoiceItems([...invoiceItems, { name: 'New Item', quantity: 0, price: 0 }]);
  };

  const handleInvoiceItemDelete = (index) => {
    const data = invoiceItems.filter((_item, itemIdx) => itemIdx !== index);

    setInvoiceItems(data);
  };

  return (
    <InvoiceFormContext.Provider
      value={{
        status,
        client,
        terms,
        invoiceItems,
        setStatus,
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

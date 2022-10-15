export enum EInvoiceStatus {
  Draft = 'Draft',
  Paid = 'Paid',
  Pending = 'Pending',
}
export interface IInvoiceAddress {
  street: string;
  city: string;
  postcode: string;
  country: string;
}

export interface IInvoiceClient {
  name: string;
  email: string;
  address: IInvoiceAddress;
}

export interface IInvoiceTerms {
  invoiceDate: string;
  paymentDate: string;
  projectDescription: string;
}

export interface IInvoiceItem {
  name: string;
  quantity: number;
  price: number;
}

export interface IInvoiceFormData {
  client: IInvoiceClient;
  terms: IInvoiceTerms;
  invoiceItems: IInvoiceItem[];
}

export interface IInvoice extends IInvoiceClient, IInvoiceTerms {
  id: string;
  invoiceItems: IInvoiceItem[];
  createdAt: string;
  updatedAt: string;
}

import { EInvoiceStatus } from './enums/invoices';

export declare namespace Invoice {
  export interface IAddress {
    street: string;
    city: string;
    postcode: string;
    country: string;
  }

  export interface IClient {
    name: string;
    email: string;
    address: IInvoiceAddress;
  }

  export interface ITerms {
    invoiceDate: string;
    paymentDate: string;
    projectDescription: string;
  }

  export interface IItem {
    name: string;
    quantity: number;
    price: number;
  }

  export interface IFormData {
    status: EInvoiceStatus;
    client: IClient;
    terms: ITerms;
    invoiceItems: IItem[];
  }

  export interface IModel extends IClient, ITerms {
    id: string;
    code: string;
    status: EInvoiceStatus;
    invoiceItems: IInvoiceItem[];
    total: number;
    createdAt: number;
    updatedAt: number;
  }
}

import { EInvoiceStatus } from '@enums/invoices';
import { Invoice } from '@types';

export const mockInvoices: Invoice.IModel[] = [
  {
    id: '1',
    status: EInvoiceStatus.Draft,
    invoiceItems: [
      {
        name: 'Coolthings',
        quantity: 4,
        price: 10,
      },
      {
        name: 'Otherthing',
        quantity: 2,
        price: 500,
      },
    ],
    name: 'John Doe',
    email: 'fran@email.com',
    address: {
      street: 'Street 1',
      city: 'City',
      postcode: '12345',
      country: 'Country',
    },
    invoiceDate: '12-12-1212',
    paymentDate: '12-01-1213',
    projectDescription: 'Test',
    code: '35ab4c',
    total: 1040,
    createdAt: 1665856888902,
    updatedAt: 1665856888902,
  },
  {
    id: '2',
    status: EInvoiceStatus.Paid,
    invoiceItems: [
      {
        name: 'Coolthings',
        quantity: 5,
        price: 103.99,
      },
      {
        name: 'Otherthing',
        quantity: 1,
        price: 1999.99,
      },
    ],
    name: 'Francisco Silva',
    email: 'fran@email.com',
    address: {
      street: 'Street 1',
      city: 'City',
      postcode: '12345',
      country: 'Country',
    },
    invoiceDate: '12-12-1212',
    paymentDate: '12-01-1213',
    projectDescription: 'Test',
    code: '35ab4c',
    total: 1040,
    createdAt: 1665856888902,
    updatedAt: 1665856888902,
  },
  {
    id: '3',
    status: EInvoiceStatus.Pending,
    invoiceItems: [
      {
        name: 'Coolthings',
        quantity: 10,
        price: 200.5,
      },
      {
        name: 'Otherthing',
        quantity: 3,
        price: 300,
      },
    ],
    name: 'Random Client',
    email: 'fran@email.com',
    address: {
      street: 'Street 1',
      city: 'City',
      postcode: '12345',
      country: 'Country',
    },
    invoiceDate: '12-12-1212',
    paymentDate: '12-01-1213',
    projectDescription: 'Test',
    code: '35ab4c',
    total: 1040,
    createdAt: 1665856888902,
    updatedAt: 1665856888902,
  },
];

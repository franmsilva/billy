import { Invoice } from '@types';

export const formatInvoiceModelToFormData = (data: Invoice.IModel): Invoice.IFormData => {
  if (!data) return;

  return {
    status: data.status,
    client: {
      name: data.name,
      email: data.email,
      address: data.address,
    },
    terms: {
      invoiceDate: data.invoiceDate,
      paymentDate: data.paymentDate,
      projectDescription: data.projectDescription,
    },
    invoiceItems: data.invoiceItems,
  };
};

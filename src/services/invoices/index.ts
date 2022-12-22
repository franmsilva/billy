import dynamoose from 'dynamoose';
import { v4 as uuidv4 } from 'uuid';

import { Invoice } from '@types';

import { InvoiceSchema } from './schemas';

const ddb = new dynamoose.aws.ddb.DynamoDB({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
  region: process.env.AWS_REGION,
});

dynamoose.aws.ddb.set(ddb);

const InvoiceModel = dynamoose.model(process.env.INVOICES_TABLE_NAME, InvoiceSchema);

const getInvoiceItemsTotal = (items: Invoice.IItem[]) =>
  items.reduce((total, item) => total + item.price * item.quantity, 0);

const create = async (payload: Invoice.IFormData) => {
  const id = uuidv4() as string;
  const { status, client, terms, invoiceItems } = payload;

  return new InvoiceModel({
    id,
    status,
    invoiceItems,
    ...client,
    ...terms,
    // Temporary solution while we look for a performant way
    // to track the number of items in the table and increment it
    code: id.slice(0, 6).toUpperCase(),
    total: getInvoiceItemsTotal(invoiceItems),
  }).save();
};

const get = async (id: string) => InvoiceModel.get(id);

const getAll = async (status: string[]) =>
  status.length
    ? InvoiceModel.scan().filter('status').in(status).exec()
    : InvoiceModel.scan().exec();

const update = async (id: string, updateObj: Partial<Invoice.IFormData>) => {
  const { status, client, terms, invoiceItems } = updateObj;

  InvoiceModel.update(
    { id },
    {
      ...(status && { status }),
      ...client,
      ...terms,
      ...(invoiceItems && {
        invoiceItems,
        total: getInvoiceItemsTotal(invoiceItems),
      }),
    }
  );
};
const remove = async (id: string) => InvoiceModel.delete(id);

const InvoiceService = {
  create,
  get,
  getAll,
  update,
  remove,
};

export default InvoiceService;

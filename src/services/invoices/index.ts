import dynamoose from 'dynamoose';
import { v4 as uuidv4 } from 'uuid';

import { IInvoiceFormData } from '@src/types/invoice';

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

const create = async (payload: IInvoiceFormData) => {
  const { client, terms, invoiceItems } = payload;

  return new InvoiceModel({
    id: uuidv4(),
    ...client,
    ...terms,
    invoiceItems,
  }).save();
};

const get = async (id: string) => InvoiceModel.get(id);

const getAll = async () => InvoiceModel.scan().exec();

const update = async (id: string, updateObj: Partial<IInvoiceFormData>) => {
  const { client, terms, invoiceItems } = updateObj;

  InvoiceModel.update(
    { id },
    {
      ...client,
      ...terms,
      ...(invoiceItems && { invoiceItems }),
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

import InvoiceService from '@src/services/invoices';

import type { NextApiRequest, NextApiResponse } from 'next';

const getInvoice = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.query;

    if (typeof id !== 'string') {
      throw new Error('Validation error: id slug is not a string');
    }

    const invoice = await InvoiceService.get(id);
    res.status(200).json(invoice);
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteInvoice = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.query;

    if (typeof id !== 'string') {
      throw new Error('Validation error: id slug is not a string');
    }

    const response = await InvoiceService.remove(id);
    res.status(204).json(response);
  } catch (err) {
    res.status(500).json(err);
  }
};

const updateInvoice = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.query;

    if (typeof id !== 'string') {
      throw new Error('Validation error: id slug is not a string');
    }

    await InvoiceService.update(id, req.body);
    res.status(204).json({ message: 'Success' });
  } catch (err) {
    res.status(500).json(err);
  }
};

const mapRequestMethodToHandler = {
  GET: getInvoice,
  PUT: updateInvoice,
  DELETE: deleteInvoice,
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  return await mapRequestMethodToHandler[req.method](req, res);
};

export default handler;

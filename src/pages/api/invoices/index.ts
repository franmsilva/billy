import InvoiceService from '@src/services/invoices';

import type { NextApiRequest, NextApiResponse } from 'next';

const postInvoice = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const invoice = await InvoiceService.create(req.body);
    res.status(201).json(invoice);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getAllInvoices = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const statusFilters = req.query.status;
    const status = typeof statusFilters === 'string' ? statusFilters.split(',') : [];
    const invoices = await InvoiceService.getAll(status);
    res.status(200).json({ invoices });
  } catch (err) {
    res.status(500).json(err);
  }
};

const mapRequestMethodToHandler = {
  POST: postInvoice,
  GET: getAllInvoices,
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  return await mapRequestMethodToHandler[req.method](req, res);
};

export default handler;

import type { NextApiRequest, NextApiResponse } from 'next';

const hello = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ message: 'Hello World!' });
};

export default hello;

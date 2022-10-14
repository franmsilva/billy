import Head from 'next/head';
import { FC } from 'react';

import CoreLayout from '@src/layouts/core';

const Home: FC = () => {
  return (
    <CoreLayout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Billy.io</title>
      </Head>
      <p>Welcome to Billy.io</p>
      <p>This is a very empty homepage...</p>
    </CoreLayout>
  );
};

export default Home;

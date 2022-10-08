import Head from 'next/head';
import { FC } from 'react';

import NavigationBar from '@src/components/NavigationBar/NavigationBar';

const Home: FC = () => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Project Name</title>
    </Head>
    <NavigationBar />
  </>
);

export default Home;

import Head from 'next/head';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { useAuth } from '@src/contexts/AuthContext';
import CoreLayout from '@src/layouts/core';

const Home: FC = () => {
  const { logout, user } = useAuth();
  const router = useRouter();
  return (
    <CoreLayout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Billy.io</title>
      </Head>
      <pre>{JSON.stringify(user, undefined, 4)}</pre>
      <button
        onClick={() => {
          logout();
          router.push('/login');
        }}
      >
        logout
      </button>
      <p>Welcome to Billy.io</p>
      <p>This is a very empty homepage...</p>
    </CoreLayout>
  );
};

export default Home;

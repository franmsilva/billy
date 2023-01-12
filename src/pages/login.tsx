import Head from 'next/head';
import { FC } from 'react';

import LoginForm from '@components/molecules/LoginForm';
import AuthLayout from '@src/layouts/auth';

const Login: FC = () => {
  return (
    <AuthLayout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Billy.io</title>
      </Head>
      <LoginForm type="login" />
    </AuthLayout>
  );
};

export default Login;

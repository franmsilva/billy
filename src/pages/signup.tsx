import Head from 'next/head';
import { FC } from 'react';

import AuthForm from '@components/molecules/AuthForm';
import { EAuthType } from '@components/molecules/AuthForm/AuthForm';
import AuthLayout from '@src/layouts/auth';

const SignUp: FC = () => {
  return (
    <AuthLayout>
      <Head>
        <title>Billy.io | Sign Up</title>
      </Head>
      <AuthForm type={EAuthType.Signup} />
    </AuthLayout>
  );
};

export default SignUp;

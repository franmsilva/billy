import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, FC, FormEvent, ChangeEvent } from 'react';

import Button, { EButtonTheme } from '@components/atoms/Button';
import Input from '@components/atoms/Input';
import { useAuth } from '@src/contexts/AuthContext';
import { Auth } from '@types';

import * as S from './AuthForm.styled';

export enum EAuthType {
  Login = 'LOGIN',
  Signup = 'SIGNUP',
}

interface AuthProps {
  type: EAuthType;
}

const AuthForm: FC<AuthProps> = ({ type }) => {
  const { login, signup } = useAuth();
  const router = useRouter();
  const [data, setData] = useState<Auth.IData>({
    email: '',
    password: '',
    repeatPassword: '',
  });

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await login(data.email, data.password);
      router.push('/');
    } catch (e) {
      console.log(e);
    }
  };

  const handleSignup = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await signup(data.email, data.password);
      router.push('/');
    } catch (e) {
      console.log(e);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <S.FormWrapper>
      <h1>{type === EAuthType.Login ? 'Login' : 'Sign Up'}</h1>
      {type === EAuthType.Login ? (
        <form onSubmit={handleLogin}>
          <Input
            name="email"
            type="email"
            id="email"
            onChange={handleInputChange}
            value={data.email}
            placeholder="Email address"
          />
          <br />
          <Input
            name="password"
            type="password"
            id="password"
            onChange={handleInputChange}
            value={data.password}
            placeholder="Password"
          />
          <br />
          <br />
          <Button btnTheme={EButtonTheme.Primary} fullWidth onClick={handleLogin}>
            Login to your account
          </Button>
          <S.Paragraph>
            {"Don't have an account? "}
            <Link href="/signup">
              <S.Link>sign up</S.Link>
            </Link>
          </S.Paragraph>
        </form>
      ) : (
        <form onSubmit={handleSignup}>
          <Input
            name="email"
            type="email"
            id="email"
            onChange={handleInputChange}
            value={data.email}
            placeholder="Email address"
          />
          <br />
          <Input
            name="password"
            type="password"
            id="password"
            onChange={handleInputChange}
            value={data.password}
            placeholder="Password"
          />
          <br />
          <Input
            name="repeatPassword"
            type="password"
            id="repeatPassword"
            onChange={handleInputChange}
            value={data.repeatPassword}
            placeholder="Repeat Password"
          />
          <br />
          <br />
          <Button btnTheme={EButtonTheme.Primary} fullWidth onClick={handleSignup}>
            Create an account
          </Button>
          <S.Paragraph>
            Already have an account?{' '}
            <Link href="/login">
              <S.Link>login</S.Link>
            </Link>
          </S.Paragraph>
        </form>
      )}
    </S.FormWrapper>
  );
};

export default AuthForm;
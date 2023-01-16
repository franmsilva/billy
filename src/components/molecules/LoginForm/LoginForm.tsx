import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, FC, FormEvent, ChangeEvent } from 'react';

import Button, { EButtonTheme } from '@components/atoms/Button';
import Input from '@components/atoms/Input';
import { useAuth } from '@src/contexts/AuthContext';
import { Auth } from '@types';

import * as S from './LoginForm.styled';

interface LoginProps {
  type: string;
}

const LoginForm: FC<LoginProps> = ({ type }) => {
  const { login, signup } = useAuth();
  const router = useRouter();
  const [loginData, setLoginData] = useState<Auth.ILoginData>({
    email: '',
    password: '',
  });
  const [signUpData, setSignUpData] = useState<Auth.ISignUpData>({
    email: '',
    password: '',
    repeatPassword: '',
  });

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await login(loginData.email, loginData.password);
      router.push('/');
    } catch (e) {
      console.log(e);
    }
  };

  const handleSignup = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await signup(signUpData.email, signUpData.password);
      router.push('/');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <S.FormWrapper>
      <h1>{type === 'login' ? 'Login' : 'Sign Up'}</h1>
      {type === 'login' ? (
        <form onSubmit={handleLogin}>
          <Input
            name="email"
            type="email"
            id="email"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setLoginData({ ...loginData, email: e.target.value })
            }
            value={loginData.email}
            placeholder="Email address"
          />
          <br />
          <Input
            name="password"
            type="password"
            id="password"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
            value={loginData.password}
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
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSignUpData({ ...signUpData, email: e.target.value })
            }
            value={signUpData.email}
            placeholder="Email address"
          />
          <br />
          <Input
            name="password"
            type="password"
            id="password"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSignUpData({ ...signUpData, password: e.target.value })
            }
            value={signUpData.password}
            placeholder="Password"
          />
          <br />
          <Input
            name="repeatpassword"
            type="password"
            id="repeatpassword"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSignUpData({ ...signUpData, repeatPassword: e.target.value })
            }
            value={signUpData.repeatPassword}
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

export default LoginForm;

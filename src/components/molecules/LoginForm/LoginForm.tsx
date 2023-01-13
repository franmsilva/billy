import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, FC, FormEvent, ChangeEvent } from 'react';

import Button, { EButtonTheme } from '@components/atoms/Button';
import Input from '@components/atoms/Input';
import { ETypographyVariant } from '@enums/typography';
import { useAuth } from '@src/contexts/AuthContext';
import { Auth } from '@types';

import * as S from './LoginForm.styled';

interface LoginProps {
  type: string;
}

const LoginForm: FC<LoginProps> = ({ type }) => {
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

  return (
    <S.FormWrapper>
      <S.Subheading as="h1" displayAs={ETypographyVariant.H1}>
        {type === 'login' ? 'login' : 'sign up'}
      </S.Subheading>
      {type === 'login' ? (
        <form onSubmit={handleLogin}>
          <Input
            name="email"
            type="email"
            id="email"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setData({ ...data, email: e.target.value })
            }
            value={data.email}
            placeholder="Email address"
          />
          <br />
          <Input
            name="password"
            type="password"
            id="password"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setData({ ...data, password: e.target.value })
            }
            value={data.password}
            placeholder="Password"
          />

          <Button btnTheme={EButtonTheme.Auth} fullWidth onClick={handleLogin}>
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
              setData({ ...data, email: e.target.value })
            }
            value={data.email}
            placeholder="Email address"
          />
          <br />
          <Input
            name="password"
            type="password"
            id="password"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setData({ ...data, password: e.target.value })
            }
            value={data.password}
            placeholder="Password"
          />
          <br />
          <Input
            name="repeatpassword"
            type="password"
            id="repeatpassword"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setData({ ...data, repeatPassword: e.target.value })
            }
            value={data.repeatPassword}
            placeholder="Repeat Password"
          />

          <Button btnTheme={EButtonTheme.Auth} fullWidth onClick={handleSignup}>
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

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
  const [errors, setErrors] = useState<Auth.IErrors>({
    emailError: '',
    passwordError: '',
    repeatPasswordError: '',
    loginError: '',
  });

  const validateEmail = (email: string): boolean => {
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regex.test(email)) {
      setErrors({ ...errors, emailError: 'Invalid email' });
      return false;
    }
    return true;
  };

  const validatePassword = (password: string): boolean => {
    if (password.length < 8) {
      setErrors({ ...errors, passwordError: 'Must be at least 8 characters' });
      return false;
    }
    return true;
  };

  const validateRepeatPassword = (password: string, repeatPassword: string): boolean => {
    if (password !== repeatPassword) {
      setErrors({ ...errors, repeatPasswordError: 'Passwords do not match' });
      return false;
    }
    return true;
  };

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await login(data.email, data.password);
      router.push('/');
      setErrors({
        ...errors,
        loginError: '',
      });
    } catch (e) {
      setErrors({
        ...errors,
        loginError: 'Sorry, your password was incorrect. Please double-check your password.',
      });
      console.log(e);
    }
  };

  const handleSignup = async (e: FormEvent) => {
    e.preventDefault();
    if (
      validateEmail(data.email) &&
      validatePassword(data.password) &&
      validateRepeatPassword(data.password, data.repeatPassword)
    ) {
      try {
        await signup(data.email, data.password);
        router.push('/');
      } catch (e) {
        console.log(e);
      }
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
          <br />
          {errors.loginError && <S.ErrorMessage>{errors.loginError}</S.ErrorMessage>}

          <Button btnTheme={EButtonTheme.Auth} fullWidth type="submit">
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
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setData({ ...data, email: e.target.value });
              setErrors({ ...errors, emailError: '' });
            }}
            value={data.email}
            placeholder="Email address"
          />
          <br />
          {errors.emailError && <S.ErrorMessage>{errors.emailError}</S.ErrorMessage>}
          <Input
            name="password"
            type="password"
            id="password"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setData({ ...data, password: e.target.value });
              setErrors({ ...errors, passwordError: '' });
            }}
            value={data.password}
            placeholder="Password"
          />
          <br />
          {errors.passwordError && <S.ErrorMessage>{errors.passwordError}</S.ErrorMessage>}
          <Input
            name="repeatpassword"
            type="password"
            id="repeatpassword"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setData({ ...data, repeatPassword: e.target.value });
              setErrors({ ...errors, repeatPasswordError: '' });
            }}
            value={data.repeatPassword}
            placeholder="Repeat Password"
          />
          <br />
          {errors.repeatPasswordError && (
            <S.ErrorMessage>{errors.repeatPasswordError}</S.ErrorMessage>
          )}

          <Button btnTheme={EButtonTheme.Auth} fullWidth type="submit">
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

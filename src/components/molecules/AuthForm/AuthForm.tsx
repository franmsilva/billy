import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, FC, FormEvent, ChangeEvent } from 'react';

import { EButtonTheme } from '@components/atoms/Button';
import { ETypographyVariant } from '@enums/typography';
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
  const { login, signup, loading, setLoading } = useAuth();
  const router = useRouter();
  const [formFields, setFormFields] = useState<Auth.IFormFields>({
    email: '',
    password: '',
    repeatPassword: '',
  });

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await login(formFields.email, formFields.password);
      router.push('/');
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  const handleSignup = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await signup(formFields.email, formFields.password);
      router.push('/');
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <S.FormWrapper>
      <h1>{type === EAuthType.Login ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={type === EAuthType.Login ? handleLogin : handleSignup}>
        <S.FormInput
          name="email"
          type="email"
          id="email"
          onChange={handleInputChange}
          value={formFields.email}
          placeholder="Email address"
        />
        <S.FormInput
          name="password"
          type="password"
          id="password"
          onChange={handleInputChange}
          value={formFields.password}
          placeholder="Password"
        />
        {type === EAuthType.Signup && (
          <S.FormInput
            name="repeatPassword"
            type="password"
            id="repeatPassword"
            onChange={handleInputChange}
            value={formFields.repeatPassword}
            placeholder="Repeat Password"
          />
        )}
        <S.SubmitButton
          btnTheme={EButtonTheme.Primary}
          fullWidth
          onClick={type === EAuthType.Login ? handleLogin : handleSignup}
        >
          {type === EAuthType.Signup
            ? loading
              ? 'loading...'
              : 'Create an account'
            : loading
            ? 'loading...'
            : 'Login to your account'}
        </S.SubmitButton>
        <S.Paragraph as="p" displayAs={ETypographyVariant.BodySm}>
          {type === EAuthType.Signup ? 'Already have an account? ' : "Don't have an account? "}
          <Link href={type === EAuthType.Signup ? '/login' : '/signup'}>
            <S.LinkContent>{type === EAuthType.Signup ? 'login' : 'sign up'}</S.LinkContent>
          </Link>
        </S.Paragraph>
      </form>
    </S.FormWrapper>
  );
};

export default AuthForm;

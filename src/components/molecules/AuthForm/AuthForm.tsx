import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, FC, FormEvent, ChangeEvent } from 'react';

import { EButtonTheme } from '@components/atoms/Button';
import Spinner from '@components/atoms/Spinner';
import { MIN_PASSWORD_LENGTH, EMAIL_REGEXP } from '@constants/app';
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
  const { login, signup, loading, error: authError, setError } = useAuth();
  const router = useRouter();
  const [formFields, setFormFields] = useState<Auth.IFormFields>({
    email: '',
    password: '',
    repeatPassword: '',
  });

  const [errors, setErrors] = useState<Auth.IFormFields>({
    email: '',
    password: '',
    repeatPassword: '',
  });

  const validateEmail = (email: string): boolean => {
    const regex = EMAIL_REGEXP;
    if (!regex.test(email)) {
      setErrors({ ...errors, email: 'Invalid email' });
      return false;
    }
    return true;
  };

  const validatePassword = (password: string): boolean => {
    if (password.length < MIN_PASSWORD_LENGTH) {
      setErrors({ ...errors, password: 'Must be at least 8 characters' });
      return false;
    }
    return true;
  };

  const validateRepeatPassword = (password: string, repeatPassword: string): boolean => {
    if (password !== repeatPassword) {
      setErrors({ ...errors, repeatPassword: 'Passwords do not match' });
      return false;
    }
    return true;
  };

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    if (validateEmail(formFields.email) && validatePassword(formFields.password)) {
      await login(formFields.email, formFields.password);
      router.push('/');
    }
  };

  const handleSignup = async (e: FormEvent) => {
    e.preventDefault();
    if (
      validateEmail(formFields.email) &&
      validatePassword(formFields.password) &&
      validateRepeatPassword(formFields.password, formFields.repeatPassword)
    ) {
      await signup(formFields.email, formFields.password);
      router.push('/');
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: '' }));
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
        <S.ErrorMessage>{errors.email}</S.ErrorMessage>
        <S.FormInput
          name="password"
          type="password"
          id="password"
          onChange={handleInputChange}
          value={formFields.password}
          placeholder="Password"
        />
        <S.ErrorMessage>{errors.password}</S.ErrorMessage>
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
        <S.ErrorMessage>{errors.repeatPassword}</S.ErrorMessage>
        <S.ErrorMessage>{authError}</S.ErrorMessage>
        <S.SubmitButton
          btnTheme={EButtonTheme.Primary}
          fullWidth
          onClick={type === EAuthType.Login ? handleLogin : handleSignup}
        >
          {type === EAuthType.Signup ? (
            loading ? (
              <Spinner size={20} />
            ) : (
              'Create an account'
            )
          ) : loading ? (
            <Spinner size={20} />
          ) : (
            'Login to your account'
          )}
        </S.SubmitButton>
        <S.Paragraph as="p" displayAs={ETypographyVariant.BodySm}>
          {type === EAuthType.Signup ? 'Already have an account? ' : "Don't have an account? "}
          <Link href={type === EAuthType.Signup ? '/login' : '/signup'}>
            <S.LinkContent onClick={() => setError('')}>
              {type === EAuthType.Signup ? 'login' : 'sign up'}
            </S.LinkContent>
          </Link>
        </S.Paragraph>
      </form>
    </S.FormWrapper>
  );
};

export default AuthForm;

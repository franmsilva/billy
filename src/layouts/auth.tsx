import Image from 'next/image';
import { FC, ReactNode } from 'react';

import * as S from './auth.styled';

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <S.Wrapper>
      <Image alt="Logo" src="/logo-dark.svg" width={40} height={40} />
      <div>{children}</div>
    </S.Wrapper>
  );
};

export default AuthLayout;

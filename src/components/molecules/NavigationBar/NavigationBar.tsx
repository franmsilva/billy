import Image from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react';

import { useAuth } from '@src/contexts/AuthContext';

import * as S from './NavigationBar.styled';

const NavigationBar: FC = () => {
  const { logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };
  const handleMouseLeave = () => {
    setIsOpen(false);
  };
  return (
    <>
      <S.Header>
        <S.LogoContainer>
          <Image alt="Logo" src="/logo-light.svg" width={40} height={40} />
        </S.LogoContainer>
        <S.UserContainer>
          <S.Image
            alt="Profile"
            src="/image-avatar.jpg"
            width={40}
            height={40}
            onMouseEnter={handleMouseEnter}
          />
        </S.UserContainer>
      </S.Header>
      <S.PopupMenu $isOpen={isOpen} onMouseLeave={handleMouseLeave}>
        <Link href="/login">
          <S.LinkContent onClick={() => logout()}>logout</S.LinkContent>
        </Link>
      </S.PopupMenu>
    </>
  );
};
export default NavigationBar;

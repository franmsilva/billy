import Image from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react';

import { useAuth } from '@src/contexts/AuthContext';
import { useClickOutside } from '@src/hooks/useClickOutside';
import { useMediaQuery } from '@src/hooks/useMediaQuery';
import { devices } from '@styles/mediaQueries';

import * as S from './NavigationBar.styled';

const LAPTOP_IMG_SIZE = 40;
const TABLET_IMG_SIZE = 32;
const MOBILE_IMG_SIZE = 28;

const NavigationBar: FC = () => {
  const { logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isTablet = useMediaQuery(devices.tablet);
  const isLaptop = useMediaQuery(devices.laptop);
  const ref = useClickOutside(() => setIsMenuOpen(false));

  const imgSize = isLaptop ? LAPTOP_IMG_SIZE : isTablet ? TABLET_IMG_SIZE : MOBILE_IMG_SIZE;
  let timeoutId: ReturnType<typeof setTimeout>;

  const toggleMenu = () => setIsMenuOpen((prevState) => !prevState);
  const closeMenuWithDelay = (delay: number) => {
    timeoutId = setTimeout(() => setIsMenuOpen(false), delay);
  };

  return (
    <S.Wrapper>
      <S.Header>
        <S.LogoContainer>
          <Image alt="Logo" src="/logo-light.svg" width={imgSize} height={imgSize} />
        </S.LogoContainer>
        <S.UserContainer
          ref={ref}
          onMouseEnter={() => setIsMenuOpen(true)}
          onMouseLeave={() => closeMenuWithDelay(500)}
        >
          <S.ProfileImage
            alt="Profile"
            src="/image-avatar.jpg"
            width={imgSize}
            height={imgSize}
            onClick={toggleMenu}
          />
        </S.UserContainer>
      </S.Header>
      <S.PopupMenu
        $isOpen={isMenuOpen}
        onMouseEnter={() => clearTimeout(timeoutId)}
        onMouseLeave={() => closeMenuWithDelay(300)}
      >
        <Link href="/login">
          <S.LinkContent onClick={logout}>Logout</S.LinkContent>
        </Link>
      </S.PopupMenu>
    </S.Wrapper>
  );
};
export default NavigationBar;

import Image from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react';

import { useAuth } from '@src/contexts/AuthContext';
import { useMediaQuery } from '@src/hooks/useMediaQuery';
import { devices } from '@styles/mediaQueries';

import * as S from './NavigationBar.styled';

const LAPTOP_IMG_SIZE = 40;
const TABLET_IMG_SIZE = 32;
const MOBILE_IMG_SIZE = 28;

const NavigationBar: FC = () => {
  const { logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const isTablet = useMediaQuery(devices.tablet);
  const isLaptop = useMediaQuery(devices.laptop);

  const imgSize = isLaptop ? LAPTOP_IMG_SIZE : isTablet ? TABLET_IMG_SIZE : MOBILE_IMG_SIZE;

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  return (
    <>
      <S.Header>
        <S.LogoContainer>
          <Image alt="Logo" src="/logo-light.svg" width={imgSize} height={imgSize} />
        </S.LogoContainer>
        <S.UserContainer>
          <S.ProfileImage
            alt="Profile"
            src="/image-avatar.jpg"
            width={imgSize}
            height={imgSize}
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

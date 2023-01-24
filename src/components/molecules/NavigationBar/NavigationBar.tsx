import Image from 'next/image';
import { FC } from 'react';

import { useMediaQuery } from '@src/hooks/useMediaQuery';
import { devices } from '@styles/mediaQueries';

import * as S from './NavigationBar.styled';

const LAPTOP_IMG_SIZE = 40;
const TABLET_IMG_SIZE = 32;
const MOBILE_IMG_SIZE = 28;

const NavigationBar: FC = () => {
  const isTablet = useMediaQuery(devices.tablet);
  const isLaptop = useMediaQuery(devices.laptop);

  const imgSize = isLaptop ? LAPTOP_IMG_SIZE : isTablet ? TABLET_IMG_SIZE : MOBILE_IMG_SIZE;

  return (
    <S.Header>
      <S.LogoContainer>
        <Image alt="Logo" src="/logo-light.svg" width={imgSize} height={imgSize} />
      </S.LogoContainer>
      <S.UserContainer>
        <S.ProfileImage alt="Profile" src="/image-avatar.jpg" width={imgSize} height={imgSize} />
      </S.UserContainer>
    </S.Header>
  );
};

export default NavigationBar;

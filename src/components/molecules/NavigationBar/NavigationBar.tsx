import Image from 'next/image';
import { FC } from 'react';

import * as S from './NavigationBar.styled';

const NavigationBar: FC = () => (
  <S.Header>
    <S.LogoContainer>
      <Image alt="Logo" src="/logo-light.svg" width={40} height={40} />
    </S.LogoContainer>
    <S.UserContainer>
      <S.Image alt="Profile" src="/image-avatar.jpg" width={40} height={40} />
    </S.UserContainer>
  </S.Header>
);

export default NavigationBar;

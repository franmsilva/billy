import { FC, ReactNode } from 'react';

import Drawer from '@components/molecules/Drawer';
import NavigationBar from '@components/molecules/NavigationBar';

import * as S from './core.styled';

interface CoreLayoutProps {
  children: ReactNode;
}

const CoreLayout: FC<CoreLayoutProps> = ({ children }) => {
  return (
    <>
      <Drawer />
      <NavigationBar />
      <S.MainContent>{children}</S.MainContent>
    </>
  );
};

export default CoreLayout;

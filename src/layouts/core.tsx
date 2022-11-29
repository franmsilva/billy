import { FC, ReactNode } from 'react';

import Drawer from '@components/molecules/Drawer';
import NavigationBar from '@components/molecules/NavigationBar';
import { ContentDrawerProvider } from '@src/contexts/ContentDrawerContext';

import * as S from './core.styled';

interface CoreLayoutProps {
  children: ReactNode;
}

const CoreLayout: FC<CoreLayoutProps> = ({ children }) => {
  return (
    <ContentDrawerProvider>
      <Drawer />
      <NavigationBar />
      <S.MainContent>{children}</S.MainContent>
    </ContentDrawerProvider>
  );
};

export default CoreLayout;

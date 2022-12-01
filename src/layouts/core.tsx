import { FC, ReactNode } from 'react';

import NavigationBar from '@components/molecules/NavigationBar';
import { ContentDrawerProvider } from '@src/contexts/ContentDrawerContext';
import { ModalProvider } from '@src/contexts/ModalContext';

import * as S from './core.styled';

interface CoreLayoutProps {
  children: ReactNode;
}

const CoreLayout: FC<CoreLayoutProps> = ({ children }) => {
  return (
    <ContentDrawerProvider>
      <ModalProvider>
        <NavigationBar />
        <S.MainContent>{children}</S.MainContent>
      </ModalProvider>
    </ContentDrawerProvider>
  );
};

export default CoreLayout;

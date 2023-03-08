import { FC, ReactNode } from 'react';

import Overlay from '@components/atoms/Overlay';
import { useContentDrawerContext } from '@src/contexts/ContentDrawerContext';
import { useClickOutside } from '@src/hooks/useClickOutside';

import * as S from './Drawer.styled';

interface IDrawerProps {
  children: ReactNode;
}

const Drawer: FC<IDrawerProps> = ({ children }) => {
  const { isOpen, closeContentDrawer } = useContentDrawerContext();
  const ref = useClickOutside(closeContentDrawer);

  return (
    <>
      <Overlay $isOpen={isOpen} data-testid="overlay" />
      <S.Body $isOpen={isOpen} ref={ref}>
        {children}
      </S.Body>
    </>
  );
};

export default Drawer;

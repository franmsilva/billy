import { FC, ReactNode } from 'react';

import * as S from './Drawer.styled';

interface IDrawerProps {
  isOpen: boolean;
  children: ReactNode;
}

const Drawer: FC<IDrawerProps> = ({ isOpen, children }) => (
  <>
    <S.Overlay $isOpen={isOpen} />
    <S.Body $isOpen={isOpen}>{children}</S.Body>
  </>
);

export default Drawer;

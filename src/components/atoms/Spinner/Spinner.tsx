import { FC } from 'react';

import * as S from './Spinner.styled';

interface ISpinnerProps {
  size: number;
}

const Spinner: FC<ISpinnerProps> = ({ size }) => {
  return <S.Spinner $size={size} />;
};

export default Spinner;

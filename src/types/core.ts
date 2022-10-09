import { ComponentType } from 'react';

export interface IStyledComponent {
  as?: JSX.IntrinsicElements | ComponentType;
  className?: string;
}

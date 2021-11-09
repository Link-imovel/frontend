import { ReactElement } from 'react';

interface CardProps {
  children?: ReactElement | ReactElement[];
  size?: 'small' | 'normal';
  onClick?: React.MouseEventHandler<HTMLDivElement> & (() => void);
}

interface CardContainerProp extends Omit<CardProps, 'children'> {}

export type { CardProps, CardContainerProp };

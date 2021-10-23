import { ReactElement } from "react";

interface CardProps {
  children?: ReactElement | ReactElement[];
  size?: 'small' | 'normal';
}

interface CardContainerProp extends Omit<CardProps, 'children'> {}

export type { CardProps, CardContainerProp };

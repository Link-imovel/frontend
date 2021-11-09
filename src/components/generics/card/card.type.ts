import { CarouselProps } from '@components/generics/carousel/carousel.type';
import React from 'react';

interface ButtonsProps {
  BCircleWhatsApp: {
    callback?: () => void;
  };
  BNavigation: {
    typeSize: 'small' | 'medium';
    label?: string;
    callback?: () => void;
  };
  BContact: {
    label: string;
    callback?: () => void;
  };
  BEdit?: {
    callback?: () => void;
  };
  BDelete?: {
    callback?: () => void;
  };
}

interface CardProps {
  variant: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'normal';
  sizePending?: 'small' | 'normal';
  title?: string;
  neighborhood?: string;
  value?: number;
  address?: string;
  quantityRoom?: number;
  quantityBathroom?: number;
  quantityGarage?: number;
  quantityViews?: number;
  labelViews?: string;
  buttons: ButtonsProps;
  info?: string;
  name: string;
  phoneNumber: string;
  onClick?: React.MouseEventHandler<HTMLDivElement> & (() => void);
}

interface CardProps extends Partial<CarouselProps> {}

export type { CardProps };

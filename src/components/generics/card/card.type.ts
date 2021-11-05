import { CarouselProps } from '@components/generics/carousel/carousel.type';
import React, { ReactElement } from 'react';

interface ButtonsProps {
  BCircleWhatsApp: {
    callback: () => void;
  };
  BNavigation: {
    typeSize: 'small' | 'medium';
    label?: string;
    callback: () => void;
  };
  BContact: {
    label: string;
    background: string;
    color: string;
    callback: () => void;
  };
  BEdit?: {
    callback: () => void;
  };
  BDelete?: {
    callback: () => void;
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
  bathroom?: React.ReactElement;
  bed?: React.ReactElement;
  car?: React.ReactElement;
  visibility?: ReactElement;
  quantityViews?: number;
  labelViews?: string;
  buttons: ButtonsProps;
  info?: string;
  permIdentity: React.ReactElement;
  phoneIphone: React.ReactElement;
  name: string;
  phoneNumber: string;
}

interface CardProps extends Partial<CarouselProps> {}

export type { CardProps };

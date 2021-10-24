import { CarouselProps } from '@components/generics/carousel/carousel.type';
import React from 'react';

interface CardProps {
  size?: 'small' | 'normal';
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
}

interface CardProps extends Partial<CarouselProps> {}

export type { CardProps };

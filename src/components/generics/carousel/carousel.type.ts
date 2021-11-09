import React from 'react';

interface CarouselProps {
  images: string | string[];
  size?: 'small' | 'normal';
  chevronRight?: React.ReactElement;
  chevronLeft?: React.ReactElement;
};

interface CarouselImgProps {
  selectedTab: number;
}

interface CarouselBodyProp extends Pick<CarouselProps, 'size'> {}

export type { CarouselProps, CarouselImgProps, CarouselBodyProp };

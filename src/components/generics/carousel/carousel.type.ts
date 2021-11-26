import React from 'react';

interface CarouselProps {
  images: string | string[];
  size?: 'small' | 'normal' | 'size';
  chevronRight?: React.ReactElement;
  chevronLeft?: React.ReactElement;
  selectedIndex?: number;
}

interface CarouselImgProps {
  selectedTab: number;
}

interface CarouselBodyProp extends Pick<CarouselProps, 'size'> {}

export type { CarouselProps, CarouselImgProps, CarouselBodyProp };

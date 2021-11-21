import React from 'react';

import * as S from './carousel.style';
import { CarouselProps } from './carousel.type';
import { ChevronLeft } from '../icons/chevronleft';
import { ChevronRight } from '../icons/chevronright';
import { useRouter } from 'next/router';

const Carousel = ({
  images,
  size,
  chevronLeft,
  chevronRight,
}: CarouselProps): React.ReactElement => {
  const [quantity, setQuantity] = React.useState(0);
  const [selected, setSelected] = React.useState(0);

  React.useEffect(() => {
    if (Array.isArray(images)) {
      setQuantity(images.length);
    }
  }, [images]);

  const handleImage = React.useCallback(
    (selected: number, next?: boolean) => {
      if (next) {
        if (selected + 1 < quantity) {
          setSelected(selected + 1);
        }
        if (selected + 1 === quantity) {
          setSelected(0);
        }
      }

      if (!next) {
        selected - 1 < 0
          ? setSelected(quantity - 1)
          : setSelected(selected - 1);
      }
    },
    [quantity]
  );

  const renderImages = React.useCallback((sources: string | string[]):
    | React.ReactElement
    | React.ReactElement[] => {
    if (Array.isArray(sources)) {
      return sources.map((src, i) => (
        <S.CarouselImage key={i} id={`slider${i}`} src={src} />
      ));
    }
    return <S.CarouselImage src={sources} />;
  }, []);

  return (
    <S.CarouselBody size={size || 'small'}>
      {images.length > 1 && (
        <S.CarouselArrowL onClick={() => handleImage(selected)}>
          {chevronLeft || <ChevronLeft />}
        </S.CarouselArrowL>
      )}
      <S.CarouselSlider selectedTab={selected}>
        {images.length > 0
          ? renderImages(images)
          : renderImages('/images/no-photo.png')}
      </S.CarouselSlider>
      {images.length > 1 && (
        <S.CarouselArrowR onClick={() => handleImage(selected, true)}>
          {chevronRight || <ChevronRight />}
        </S.CarouselArrowR>
      )}
    </S.CarouselBody>
  );
};

export { Carousel };

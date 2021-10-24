import React from 'react';

import * as S from './gallery.styles';
import { GalleryProps } from './gallery.type';
import { Gallery as GalleryContainer } from '@components/container/gallery';

const Gallery = ({ images }: GalleryProps): React.ReactElement => {
  const renderImages = React.useCallback(() => {
    if (Array.isArray(images)) {
      return images.slice(1, 5).map((img, i) => <S.Image src={img} key={i} />);
    }
    return;
  }, [images]);

  return (
    <GalleryContainer>
      <S.MainImageWrapper>
        <S.Image src={Array.isArray(images) ? images[0] : images} />
      </S.MainImageWrapper>
      <S.ImagesWrapper>{renderImages()}</S.ImagesWrapper>
    </GalleryContainer>
  );
};

export { Gallery };

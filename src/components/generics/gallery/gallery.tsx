import React, { useState } from 'react';

import * as S from './gallery.styles';
import { GalleryProps } from './gallery.type';
import { Gallery as GalleryContainer } from '@components/container/gallery';
import { Modal } from '@components/generics/modal';

const Gallery = ({ images }: GalleryProps): React.ReactElement => {
  const [showModal, setShowModal] = useState(false);
  const [index, setIndex] = useState(0);

  const openModal = React.useCallback(
    (index: number) => {
      setIndex(index);
      setShowModal(!showModal);
    },
    [setIndex, setShowModal, showModal]
  );

  const renderImages = React.useCallback(() => {
    if (Array.isArray(images)) {
      return images
        .slice(1, 5)
        .map((img, i) => (
          <S.Image src={img} key={i + 1} onClick={() => openModal(i + 1)} />
        ));
    }
    return;
  }, [images, openModal]);

  return (
    <>
      <GalleryContainer>
        <S.MainImageWrapper onClick={() => openModal(0)}>
          <S.Image src={Array.isArray(images) ? images[0] : images} />
        </S.MainImageWrapper>
        <S.ImagesWrapper>{renderImages()}</S.ImagesWrapper>
      </GalleryContainer>
      <Modal
        images={images}
        selectedImage={index}
        showModal={showModal}
        onClose={() => setShowModal(!showModal)}
      />
    </>
  );
};

export { Gallery };

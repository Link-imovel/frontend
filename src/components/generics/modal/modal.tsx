import React, { useState } from 'react';

import { ModalProps } from './modal.type';
import * as S from './modal.styles';
import { Modal as ModalContainer } from '@components/container/modal';
import { Carousel } from '@components/generics/carousel';
import { Close } from '../icons/close';

const Modal = ({
  images,
  showModal,
  onClose,
  selectedImage,
}: ModalProps): React.ReactElement => {
  return (
    <ModalContainer showModal={showModal} onClose={onClose}>
      <S.ButtonContainer>
        <S.ButtonClose onClick={() => onClose()}>{<Close />}</S.ButtonClose>
      </S.ButtonContainer>
      <Carousel
        images={images || ''}
        size={'size'}
        selectedIndex={selectedImage}
      />
    </ModalContainer>
  );
};

export { Modal };

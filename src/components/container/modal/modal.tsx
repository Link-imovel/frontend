import React from 'react';

import * as S from './modal.styles';
import { ModalProps } from './modal.type';

const Modal = ({
  children,
  backgroundColor,
  showModal,
  id = 'modal',
  onClose = () => {},
}: ModalProps): React.ReactElement => {
  const handleOutsideClick = (e: any) => {
    if (e.target.id === id) onClose();
  };

  return (
    <>
      {showModal ? (
        <S.ModalBackground id={id} onClick={handleOutsideClick}>
          <S.Container
            backgroundColor={backgroundColor}
            hasContent={!!children}
          >
            {children}
          </S.Container>
        </S.ModalBackground>
      ) : null}
    </>
  );
};

export { Modal };

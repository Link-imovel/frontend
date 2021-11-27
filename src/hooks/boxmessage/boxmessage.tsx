import React from 'react';
import {
  BoxMessageContextData,
  BoxMessageProps,
  ModalProps,
} from './boxmessage.type';

const BoxMessageContext = React.createContext({} as BoxMessageContextData);

const BoxMessageProvider = ({
  children,
}: BoxMessageProps): React.ReactElement => {
  const [modal, setModal] = React.useState<ModalProps>({ open: false });

  const openModal = React.useCallback((id: string | undefined) => {
    setModal({ open: true, id });
  }, []);

  const closeModal = React.useCallback(() => {
    setModal({ open: false });
  }, []);

  const deleteAnnoucement = React.useCallback(() => {
    const { id } = modal;
    console.log(id);
  }, [modal]);

  return (
    <BoxMessageContext.Provider
      value={{ modal, openModal, deleteAnnoucement, closeModal }}
    >
      {children}
    </BoxMessageContext.Provider>
  );
};

export { BoxMessageContext, BoxMessageProvider };

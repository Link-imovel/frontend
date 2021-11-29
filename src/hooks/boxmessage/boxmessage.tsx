import React from 'react';

import { useDispatch } from 'react-redux';

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

  return (
    <BoxMessageContext.Provider value={{ modal, openModal, closeModal }}>
      {children}
    </BoxMessageContext.Provider>
  );
};

export { BoxMessageContext, BoxMessageProvider };

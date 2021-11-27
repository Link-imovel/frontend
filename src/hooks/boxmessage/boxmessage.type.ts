interface BoxMessageContextData {
  modal: ModalProps;
  openModal: (id: string | undefined) => void;
  closeModal: () => void;
  deleteAnnoucement: () => void;
}

interface ModalProps {
  open: boolean;
  id?: string;
}

interface BoxMessageProps {
  children?: React.ReactElement | React.ReactElement[] | string;
}

export type { BoxMessageProps, BoxMessageContextData, ModalProps };

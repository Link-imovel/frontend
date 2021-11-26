import { ReactElement } from 'react';

interface ModalProps {
  children?: ReactElement | ReactElement[];
  backgroundColor?: string;
  showModal?: boolean;
  onClose: () => void;
  id?: string;
}

interface ModalContainerProps extends Pick<ModalProps, 'backgroundColor'> {
  hasContent: boolean;
}

export type { ModalProps, ModalContainerProps };

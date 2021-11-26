interface ModalProps {
  images?: string | string[];
  showModal?: boolean;
  selectedImage: number;
  onClose: () => void;
}

export type { ModalProps };

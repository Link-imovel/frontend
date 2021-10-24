interface ButtonsProps {
  BLogo: {
    icon: React.ReactElement;
    callback?: () => void;
  };
  BArrowBefore: {
    icon: React.ReactElement;
    label: string;
    callback?: () => void;
  };
  BLogin: {
    label: string;
    callback?: () => void;
  };
}

interface GenericProps {
  title: string;
  buttons: ButtonsProps;
}

export type { ButtonsProps, GenericProps };

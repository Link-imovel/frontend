interface ButtonsProps {
  BLogo: {
    callback?: () => void;
  };
  BArrowBefore: {
    label: string;
    callback?: () => void;
  };
  BLogin: {
    label: string;
    callback?: () => void;
  };
}

interface LoginProps {
  title: string;
  subtitle: string;
  buttons: ButtonsProps;
}

export type { ButtonsProps, LoginProps };

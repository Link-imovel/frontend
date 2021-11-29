interface ButtonsProps {
  BClose: {
    callback?: () => void;
  };
  BDelete: {
    callback?: () => void;
  };
}

interface BoxMessageProps {
  open: boolean;
  title?: string;
  buttons: ButtonsProps;
}

export type { BoxMessageProps, ButtonsProps };

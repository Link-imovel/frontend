interface ButtonsProps {
  BLogo: {
    callback?: () => void;
  };
  BArrowBefore: {
    label: string;
    callback?: () => void;
  };
}

interface AboutProps {
  title: string;
  description: string;
  buttons: ButtonsProps;
}

export type { AboutProps };

interface ButtonsProps {
  BLogo: {
    callback?: () => void;
  };
  BArrowBefore: {
    label: string;
    callback?: () => void;
  };
  BSend: {
    label: string;
    callback?: () => void;
  };
}

export type ContactProps = {
  title: string;
  buttons: ButtonsProps;
};

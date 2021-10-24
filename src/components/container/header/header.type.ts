interface ButtonsProps {
  BLogo: {
    icon: React.ReactElement;
    callback: () => void;
  };
  BLogin: {
    label?: string;
    callback: () => void;
  };
  BShowImovels: {
    label: string;
    callback: () => void;
  };
}

export type HeaderProps = {
  title: string;
  subtitle: string;
  buttons: ButtonsProps;
};

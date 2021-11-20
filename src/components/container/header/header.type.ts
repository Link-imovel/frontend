interface ButtonsProps {
  BLogo: {
    callback?: () => void;
  };
  BLogin: {
    label?: string;
    callback?: () => void;
  };
  BShowImovels: {
    label: string;
    callback?: () => void;
  };
}

export type HeaderProps = {
  userName: string;
  title: string;
  subtitle: string;
  buttons: ButtonsProps;
  isLogged: boolean;
  handleData: (fieldName: string, value: any) => void;
};

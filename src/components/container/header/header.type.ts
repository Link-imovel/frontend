interface CallbackProps {
  logo: () => void;
  login: () => void;
  showImovels: () => void;
}

export type HeaderProps = {
  title: string;
  subtitle: string;
  icon: React.ReactElement;
  callback: CallbackProps;
  labelSignIn: string;
  labelShowImovels: string;
};

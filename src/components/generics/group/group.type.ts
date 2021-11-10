interface ButtonsProps {
  BLogo: {
    callback?: () => void;
  };
  BAnuncement: {
    label: string;
    callback?: () => void;
  };
  BCreateAnuncement: {
    label: string;
    callback?: () => void;
  };
  BCreateUser: {
    label: string;
    callback?: () => void;
  };
  BListUsers: {
    label: string;
    callback?: () => void;
  };
  BLogout: {
    label: string;
    callback?: () => void;
  };
  BUpdatePerfil: {
    label: string;
    callback?: () => void;
  };
}

export type GroupProps = {
  user: string;
  description: string;
  buttons: ButtonsProps;
  render: {
    admin: boolean;
    user: boolean;
  };
};

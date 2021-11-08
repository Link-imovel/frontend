import { ReactElement } from 'react';

interface ButtonsProps {
  BLogo: {
    callback?: () => void;
  };
  BLogin: {
    label?: string;
    callback?: () => void;
  };
  BAnuncement: {
    label?: string;
    callback?: () => void;
  };
  BCreateAnuncement: {
    label?: string;
    callback?: () => void;
  };
  BCreateUser: {
    label?: string;
    callback?: () => void;
  };
  BListUsers: {
    label?: string;
    callback?: () => void;
  };
  BLogout: {
    label?: string;
    callback?: () => void;
  };
  BSettings: {
    label?: string;
    callback?: () => void;
  };
}

interface ListAnuncementProps {
  user: string;
  buttons: ButtonsProps;
  handleData?: (fieldName: string, value: any) => void;
  typePermition: 'adm' | 'user' | 'anonymous';
  isLogged: boolean;
}

export type { ListAnuncementProps };

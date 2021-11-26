import { SearchBarFields } from '@store/models/store/store.interface';

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
  BLogout: {
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
  handleValidation: (fieldName: string, value: any) => void;
  data: SearchBarFields;
  valid: boolean;
  render: {
    admin: boolean;
  };
};

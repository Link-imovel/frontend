import { LoginFields } from '@store/models/store/store.interface';

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

interface ViewLoginProps {
  title: string;
  subtitle: string;
  buttons: ButtonsProps;
  handleData: (fieldName: string, value: any) => void;
  handleValidation: (fieldName: string, value: any) => void;
  data: LoginFields;
  valid: boolean;
}

export type { ButtonsProps, ViewLoginProps, LoginProps };

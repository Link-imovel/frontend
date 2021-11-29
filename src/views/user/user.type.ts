import { UserFields } from '@store/ducks/store/store.interface';

interface ButtonsProps {
  BLogo: {
    callback?: () => void;
  };
  BArrowBefore: {
    label: string;
    callback?: () => void;
  };
  BDefault: {
    label: string;
    callback?: () => void;
  };
}

interface UserProps {
  title: string;
  buttons: ButtonsProps;
  type: 'create' | 'update' | 'update-profile';
  handleData?: (fieldName: string, value: any) => void;
  handleValidation?: (fieldName: string, value: any) => void;
}

interface UserViewProps extends Required<UserProps> {
  data: UserFields;
  valid: boolean;
}

export type { ButtonsProps, UserProps, UserViewProps };

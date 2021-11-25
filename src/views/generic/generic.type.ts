import { UserFields } from '@store/ducks/store/store.interface';

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

interface GenericProps {
  title: string;
  buttons: ButtonsProps;
  type: 'create' | 'get' | 'update';
  handleData?: (fieldName: string, value: any) => void;
  handleValidation?: (fieldName: string, value: any) => void;
}

interface GenericViewProps extends Required<GenericProps> {
  data: UserFields;
  valid: boolean;
}

export type { ButtonsProps, GenericProps, GenericViewProps };

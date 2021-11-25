import { SetPasswordFields } from '@store/ducks/store/store.interface';

interface ButtonsProps {
  BLogo: {
    callback?: () => void;
  };
  BArrowBefore: {
    label: string;
    callback?: () => void;
  };
  BConfirm: {
    label: string;
    callback?: () => void;
  };
}

interface SetPasswordProps {
  title: string;
  token: string;
  buttons: ButtonsProps;
  handleData?: (fieldName: string, value: any) => void;
  handleValidation?: (fieldName: string, value: any) => void;
}

interface SetPasswordViewPros extends Required<SetPasswordProps> {
  data: SetPasswordFields;
  valid: boolean;
}

export type { SetPasswordViewPros, SetPasswordProps };

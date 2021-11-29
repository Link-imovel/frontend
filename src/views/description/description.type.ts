import { Publication } from '@store/ducks/publications/publications.interface';

interface ButtonsProps {
  BLogo: {
    callback?: () => void;
  };
  BLogin: {
    label?: string;
    callback?: () => void;
  };
  BLogout: {
    callback?: () => void;
  };
}

interface DesciptionProps {
  id: string;
  buttons: ButtonsProps;
}

interface DescriptionViewProps extends Required<DesciptionProps> {
  user: string;
  isLogged: boolean;
  permissionType: {
    admin?: boolean;
  };
  publication: Publication<string[]>;
  handleData: (fieldName: string, value: any) => void;
  data: Record<string, any>;
}

export type { DesciptionProps, DescriptionViewProps };

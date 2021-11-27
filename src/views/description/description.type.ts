import { MapProps } from '@components/generics/map/map.type';
import { Publication } from '@store/models/publications/publications.interface';

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

interface PublicationPros {
  data: Publication<string[]>;
  location: MapProps;
}

interface DescriptionViewProps extends Required<DesciptionProps> {
  user: string;
  isLogged: boolean;
  render: {
    admin: boolean;
  };
  publication: PublicationPros;
  handleData: (fieldName: string, value: any) => void;
}

export type { DesciptionProps, DescriptionViewProps, PublicationPros };

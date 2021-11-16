import { CardProps } from '@components/generics/card/card.type';
import { UserProps } from '@components/generics/table/table.type';

interface ButtonsProps {
  BLogo: {
    callback?: () => void;
  };
  BLogin: {
    label?: string;
    callback?: () => void;
  };
  BAnuncements: {
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

interface AddressProps {
  id: string;
  street: string;
  street2: string;
  number: number;
  neighborhood: string;
  city: string;
  state: string;
  zip: string;
  ibge: string;
}

interface HomeProps {
  id: string;
  type: string;
  ref: string;
  totalArea: number;
  value: number;
  room: number;
  bedroom: number;
  kitchen: number;
  garage: number;
  serviceArea: number;
  buildAt: Date;
  description: string;
  images: Array<[]>;
  address: AddressProps;
}

interface PublicationProps {
  id?: string;
  userId: string;
  homeId: string;
  phone: string;
  reserved: boolean;
  views: number;
  virtualTour: string;
  rented: boolean;
  home: HomeProps;
}

interface CardsViewsProps extends Required<CardProps> {
  id?: string;
  userId: string;
  homeId: string;
  phone: string;
  reserved: boolean;
  views: number;
  virtualTour: string;
  rented: boolean;
  home: HomeProps;
}

interface ListProps {
  description: string;
  buttons: ButtonsProps;
  content: {
    table: boolean;
    cards: boolean;
  };
  dropdown: boolean;
}

interface ListViewProps extends ListProps {
  userName: string;
  users: UserProps[];
  render: {
    admin: boolean;
    user: boolean;
  };
  isLogged: boolean;
  cards: PublicationProps[];
  quantity: number;
}

export type { CardsViewsProps, ListViewProps, ListProps, PublicationProps };

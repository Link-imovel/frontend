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

export type ListProps = {
  userLogged: string;
  users: UserProps[];
  description: string;
  buttons: ButtonsProps;
  render: {
    admin: boolean;
    user: boolean;
  };
  isLogged: boolean;
  cards?: CardProps[];
  content: {
    table: boolean;
    cards: boolean;
  };
  quantity: number;
  dropdown?: boolean;
};

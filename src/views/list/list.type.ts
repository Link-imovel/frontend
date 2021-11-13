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
  cards: CardProps[];
  quantity: number;
}

export type { ListViewProps, ListProps };

import { CardProps } from '@components/generics/card/card.type';
import { UserProps } from '@components/generics/table/table.type';
import { ListAnnouncementFields } from '@store/models/store/store.interface';

interface ButtonsProps {
  BLogo: {
    callback?: () => void;
  };
  BLogin: {
    label?: string;
    callback?: () => void;
  };
  BAnnouncements: {
    label: string;
    callback?: () => void;
  };
  BCreateAnnouncement: {
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
  handleData?: (fieldName: string, value: any) => void;
  handleValidation?: (fieldName: string, value: any) => void;
}

interface ListViewProps extends Required<ListProps> {
  data: ListAnnouncementFields;
  valid: boolean;
  userName: string;
  users: UserProps[];
  render: {
    admin: boolean;
    user: boolean;
  };
  isLogged: boolean;
  cards: CardProps[];
  quantity: number;
  isMobile: boolean;
}

export type { ListViewProps, ListProps };

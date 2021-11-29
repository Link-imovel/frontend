import { CardProps } from '@components/generics/card/card.type';
import { ListAnnouncementFields } from '@store/ducks/store/store.interface';
import { User } from '@store/ducks/user/user.interface';

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
  BSearch: {
    label: string;
    callback?: () => void;
  };
}

interface ListProps {
  slug?: string;
  description: string;
  buttons: ButtonsProps;
  content: {
    table: boolean;
    cards: boolean;
  };
  dropdown: boolean;
  handleData?: (fieldName: string, value: any) => void;
}

interface ListViewProps extends Required<Omit<ListProps, 'slug'>> {
  data?: ListAnnouncementFields;
  userName: string;
  users: User[];
  permissionType: {
    admin?: boolean;
    user?: boolean;
  };
  isLogged: boolean;
  cards: CardProps[];
  quantity: number;
  isMobile: boolean;
  onSelect: (page: number) => void;
}

export type { ListViewProps, ListProps };

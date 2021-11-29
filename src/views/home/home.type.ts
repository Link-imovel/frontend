import { FooterProps } from '@components/container/footer/footer.type';
import { HeaderProps } from '@components/container/header/header.type';
import { CardProps } from '@components/generics/card/card.type';
import { ListAnnouncementFields } from '@store/ducks/store/store.interface';

interface HomeProps {
  header: HeaderProps;
  footer: FooterProps;
  handleData?: (fieldName: string, value: any) => void;
}

interface HomeViewProps extends Required<HomeProps> {
  data?: ListAnnouncementFields;
  userName: string;
  isLogged: boolean;
  cards: CardProps[];
  permissionType: {
    admin?: boolean;
  };
}

export type { HomeProps, HomeViewProps };

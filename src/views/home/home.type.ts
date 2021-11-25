import { FooterProps } from '@components/container/footer/footer.type';
import { HeaderProps } from '@components/container/header/header.type';
import { CardProps } from '@components/generics/card/card.type';
import { SearchBarFields } from '@store/models/store/store.interface';

interface HomeProps {
  header: HeaderProps;
  footer: FooterProps;
  handleData?: (fieldName: string, value: any) => void;
  handleValidation?: (fieldName: string, value: any) => void;
}

interface HomeViewProps extends Required<HomeProps> {
  data: SearchBarFields;
  valid: boolean;
  userName: string;
  isLogged: boolean;
  cards: CardProps[];
}

export type { HomeProps, HomeViewProps };

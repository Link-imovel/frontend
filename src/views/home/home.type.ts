import { FooterProps } from '@components/container/footer/footer.type';
import { HeaderProps } from '@components/container/header/header.type';
import { CardProps } from '@components/generics/card/card.type';

interface HomeProps {
  header: HeaderProps;
  footer: FooterProps;
  handleData?: (fieldName: string, value: any) => void;
}

interface HomeViewProps extends Required<HomeProps> {
  userName: string;
  isLogged: boolean;
  cards: CardProps[];
}

export type { HomeProps, HomeViewProps };

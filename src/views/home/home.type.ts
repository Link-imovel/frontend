import { FooterProps } from '@components/container/footer/footer.type';
import { HeaderProps } from '@components/container/header/header.type';
import { CardProps } from '@components/generics/card/card.type';

interface HomeProps {
  header: HeaderProps;
  footer: FooterProps;
  cards?: CardProps[];
}

export type { HomeProps };

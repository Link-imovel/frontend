import { CardProps } from '@components/generics/card/card.type';

interface CoordinateProps {
  latitude: number;
  longitude: number;
}

interface GeolocationProps {
  cards: CardProps[];
}

export type { CoordinateProps, GeolocationProps };

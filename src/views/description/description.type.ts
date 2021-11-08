import { MapProps } from '@components/generics/map/map.type';

interface ButtonsProps {
  BLogo: {
    callback: () => void;
  };
  BLogin: {
    label?: string;
    callback: () => void;
  };
}

interface OverviewProps {
  bathroom: number;
  bedroom: number;
  garage: number;
  livingroom: number;
  kitchen: number;
  laundry: number;
  constructionYear: string;
  typeImovel: string;
  areaImovel: string;
}

export type DesciptionProps = {
  user: string;
  isLogged: boolean;
  buttons: ButtonsProps;
  title: string;
  subtitle: string;
  text: string;
  value: string;
  handleData?: (fieldName: string, value: any) => void;
  place: MapProps;
  overview: OverviewProps;
};

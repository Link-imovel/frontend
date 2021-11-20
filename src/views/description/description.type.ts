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

interface AddressProps {
  id: string;
  street: string;
  street2: string;
  city: string;
  state: string;
  ibge: string;
  neighborhood: string;
  number: number;
  zip: string;
}

interface CreateHome {
  type: string;
  ref: string;
  totalArea: number;
  value: number;
  room: number;
  bedroom: number;
  bathroom: number;
  kitchen: number;
  garage: number;
  serviceArea: number;
  description: string;
  buildAt: string;
  address: AddressProps;
  images?: Array<[]>;
}

export type DesciptionProps = {
  user: string;
  isLogged: boolean;
  buttons: ButtonsProps;
  home: CreateHome;
  handleData: (fieldName: string, value: any) => void;
  place: MapProps;
};

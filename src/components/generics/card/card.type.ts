import React from 'react';

interface ButtonsProps {
  BCircleWhatsApp: {
    callback?: () => void;
  };
  BNavigation: {
    typeSize: 'small' | 'medium';
    label?: string;
    callback?: () => void;
  };
  BContact: {
    label: string;
    callback?: () => void;
  };
  BEdit?: {
    callback?: () => void;
  };
  BDelete?: {
    callback?: () => void;
  };
}

interface AddressProps {
  id: string;
  street: string;
  street2: string;
  number: number;
  neighborhood: string;
  city: string;
  state: string;
  zip: string;
  ibge: string;
}

interface HomeProps {
  id: string;
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
  buildAt: Date;
  description: string;
  images: string[];
  address: AddressProps;
}

interface PublicationProps {
  id?: string;
  userId: string;
  homeId: string;
  phone: string;
  reserved: boolean;
  views: number;
  virtualTour: string;
  rented: boolean;
  home: HomeProps;
}

interface CardProps {
  variant: 'primary' | 'secondary' | 'ternary';
  size?: 'small' | 'normal';
  publication: PublicationProps;
  buttons: ButtonsProps;
  onClick?: React.MouseEventHandler<HTMLDivElement> & (() => void);
}

export type { CardProps };

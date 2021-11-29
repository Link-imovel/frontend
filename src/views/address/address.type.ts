import { AddressFields } from '@store/ducks/store/store.interface';

import { BreadCrumbProps } from '@components/generics/breadcrumb/breadcrumb.type';

interface Datum {
  latitude: number;
  longitude: number;
  type: string;
  name: string;
  number: string;
  postal_code: string;
  street: string;
  confidence: number;
  region: string;
  region_code: string;
  county: string;
  locality: string;
  administrative_area: string;
  neighbourhood?: any;
  country: string;
  country_code: string;
  continent: string;
  label: string;
}

interface PositionStack {
  data: Datum[];
}

interface ButtonsProps {
  BLogo: {
    callback?: () => void;
  };
  BArrowBefore: {
    label: string;
    callback?: () => void;
  };
  BArrowAfter: {
    label: string;
    callback?: () => void;
  };
  BNext: {
    label: string;
    callback?: () => void;
  };
}

interface AddressProps {
  title: string;
  buttons: ButtonsProps;
  breadCrumb?: BreadCrumbProps;
  handleData?: (fieldName: string, value: any) => void;
  handleValidation?: (fieldName: string, value: any) => void;
}

interface AddressViewProps extends Required<AddressProps> {
  data: AddressFields;
  valid: boolean;
}

export type { AddressProps, AddressViewProps, PositionStack, Datum };

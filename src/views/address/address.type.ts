import { BreadCrumbProps } from '@components/generics/breadcrumb/breadcrumb.type';

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
  BGeneric: {
    label: string;
    callback?: () => void;
  };
}

interface AddressProps {
  title: string;
  buttons: ButtonsProps;
  breadCrumb: BreadCrumbProps;
  handleData?: (fieldName: string, value: any) => void;
}

export type { AddressProps };

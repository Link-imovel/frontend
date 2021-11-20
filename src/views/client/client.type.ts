import { ClientFields } from '@store/models/store/store.interface';

import { BreadCrumbProps } from '@components/generics/breadcrumb/breadcrumb.type';
import { DropdownOption } from '@components/generics/dropdown/dropdown.type';

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
  BCreate: {
    label: string;
    callback?: () => void;
  };
}

interface ClientProps {
  title: string;
  buttons: ButtonsProps;
  breadCrumb: BreadCrumbProps;
  options?: Array<DropdownOption>;
  handleData?: (fieldName: string, value: any) => void;
  handleValidation?: (fieldName: string, value: any) => void;
}

interface ClientViewProps extends Required<ClientProps> {
  data: ClientFields;
  valid: boolean;
}

export type { ClientProps, ClientViewProps };

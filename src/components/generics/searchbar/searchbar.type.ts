import { SearchBarFields } from '@store/models/store/store.interface';

interface SearchBarProps {
  handleData: (fieldName: string, value: any) => void;
  handleValidation: (fieldName: string, value: any) => void;
  data: SearchBarFields;
  valid: boolean;
}

export type { SearchBarProps };

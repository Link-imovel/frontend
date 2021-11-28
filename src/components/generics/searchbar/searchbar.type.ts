import { SearchBarFields } from '@store/ducks/store/store.interface';

interface SearchBarProps {
  handleData: (fieldName: string, value: any) => void;
  data?: SearchBarFields;
}

export type { SearchBarProps };

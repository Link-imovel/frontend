import { ListAnnouncementFields } from '@store/ducks/store/store.interface';

interface SearchBarProps {
  handleData: (fieldName: string, value: any) => void;
  data?: ListAnnouncementFields;
}

export type { SearchBarProps };

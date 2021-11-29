import { Publication } from '@store/ducks/publications/publications.interface';

interface ContactProps {
  publication: Publication<string[]>;
  handleData: (fieldName: string, value: any) => void;
  data: Record<string, any>;
}

export type { ContactProps };

import { ReactElement } from 'react';

interface PageProps {
  header?: ReactElement;
  children?: ReactElement | ReactElement[];
  footer?: ReactElement;
}

export type { PageProps };

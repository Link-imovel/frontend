import { ReactElement } from 'react';

interface GalleryProps {
  children?: ReactElement | ReactElement[];
  backgroundColor?: string;
}

interface GalleryContainerProps extends Pick<GalleryProps, 'backgroundColor'> {}

export type { GalleryProps, GalleryContainerProps };

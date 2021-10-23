import React from 'react';

import * as S from './gallery.styles';
import { GalleryProps } from './gallery.type';

const Gallery = ({
  children,
  backgroundColor,
}: GalleryProps): React.ReactElement => {
  return (
    <S.Container backgroundColor={backgroundColor}>{children}</S.Container>
  );
};

export { Gallery };

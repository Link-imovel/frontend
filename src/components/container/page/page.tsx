import React from 'react';

import { PageProps } from './page.type';
import * as S from './page.style';

const Page = ({ header, children, footer }: PageProps): React.ReactElement => {
  return (
    <S.Container>
      {!!header && header}
      <S.Body hasHeight={!!header && !!footer}>{children}</S.Body>
      {!!footer && footer}
    </S.Container>
  );
};

export { Page };

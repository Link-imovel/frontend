import React from 'react';

import { BreadCrumbProps } from './breadcrumb.type';
import * as S from './breadcrumb.style';

import { colors } from '@theme/theme/default';
import { ChevronRight } from '@components/generics/icons/chevronright';

const BreadCrumb = ({ paths }: BreadCrumbProps): React.ReactElement => {
  const renderLinks = React.useCallback((): React.ReactElement[] => {
    return paths.map(({ title, url }, index) => {
      if (index === 0 || index === paths.length) {
        return <S.Anchor href={url}>{title}</S.Anchor>;
      }
      return (
        <>
          <ChevronRight fill={colors.blackGrey} width={20} height={20} />
          <S.Anchor href={url}>{title}</S.Anchor>
        </>
      );
    });
  }, [paths]);

  return <S.Container>{renderLinks()}</S.Container>;
};

export { BreadCrumb };

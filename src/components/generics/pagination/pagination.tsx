import React from 'react';

import { Dropdown } from '../dropdown';

import { PaginationProps } from './pagination.type';

import * as S from './pagination.style';

const Pagination = ({ items }: PaginationProps): React.ReactElement => {
  return (
    <S.Container>
      <S.Label>Página:</S.Label>
      <S.Wrapper>
        <Dropdown options={items} />
      </S.Wrapper>
      <S.Number>de {items?.length}</S.Number>
    </S.Container>
  );
};

export { Pagination };

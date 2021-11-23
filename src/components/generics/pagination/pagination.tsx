import React from 'react';

import { Dropdown } from '../dropdown';

import { options } from '../dropdown/dropdown.options';

import * as S from './pagination.style';

const Pagination = (): React.ReactElement => {
  const getPagesQuantity = React.useCallback(() => {}, []);

  return (
    <S.Container>
      <S.Label>Página:</S.Label>
      <S.Wrapper>
        <Dropdown options={options.pagination} />
      </S.Wrapper>
      <S.Number>de {options.pagination.length}</S.Number>
    </S.Container>
  );
};

export { Pagination };

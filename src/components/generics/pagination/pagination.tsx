import React from 'react';

import { Dropdown } from '../dropdown';

import * as S from './pagination.style';
import { PaginationProps } from './pagination.type';

const Pagination = ({
  quantity,
  onSelect,
}: PaginationProps): React.ReactElement => {
  const getPagesQuantity = React.useCallback((value: number) => {
    const options: any[] = [];
    [...Array(value)].map((_, i) => {
      if (value % 10 === 0) {
        options.push({
          id: String(i),
          label: String(i),
          selected: false,
        });
      }
    });
    if (!options.length) {
      options.push({
        id: '1',
        label: '1',
        selected: false,
      });
    }
    return options;
  }, []);

  return (
    <S.Container>
      <S.Label>Página:</S.Label>
      <S.Wrapper>
        <Dropdown
          options={getPagesQuantity(quantity)}
          onSelect={(opt) => onSelect(Number(opt.id))}
        />
      </S.Wrapper>
      <S.Number>de {quantity > 10 ? Math.floor(quantity / 10) : 1}</S.Number>
    </S.Container>
  );
};

export { Pagination };

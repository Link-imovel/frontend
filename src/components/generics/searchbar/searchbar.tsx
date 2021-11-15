import React from 'react';

import { Button } from '../button';
import { Dropdown } from '../dropdown';
import { Input } from '../input';

import { Search } from '../icons/search';

import * as S from './searchbar.style';
import { colors } from '@theme/theme/default';
import { options } from '../dropdown/dropdown.options';
import { SearchBarProps } from './searchbar.type';

const SearchBar = ({ handleData }: SearchBarProps): React.ReactElement => {
  return (
    <S.Container>
      <S.Wrapper type="dropdown">
        <Dropdown
          radius="middleSquare"
          label="Tipo do Imovel"
          placeholder="Escolha um"
          options={options.type}
        />
      </S.Wrapper>
      <S.Wrapper type="input">
        <Input
          id="locale"
          label="Local"
          radius="none"
          type="text"
          name="locale"
          placeholder="Digite a cidade ou bairro"
          onChange={(el) => handleData(el.target.id, el.target.value)}
          validators={[
            {
              type: 'Required',
              message: 'O campo é requerido',
            },
            {
              type: 'NotBlank',
              message: 'O campo não pode estar em branco.',
            },
            {
              type: 'OnlyLetters',
              message: 'Digite somente letras.',
            },
          ]}
        />
      </S.Wrapper>
      <Button
        variant="primary-square"
        size="xsmall"
        radius="middleSquare"
        icon={<Search height={24} width={24} fill={colors.whiteGrey} />}
      />
    </S.Container>
  );
};

export { SearchBar };

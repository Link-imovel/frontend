import React from 'react';
import { useRouter } from 'next/router';

import { Button } from '../button';
import { Dropdown } from '../dropdown';
import { Input } from '../input';

import { Search } from '../icons/search';

import * as S from './searchbar.style';
import { colors } from '@theme/theme/default';
import { options } from '../dropdown/dropdown.options';
import { SearchBarProps } from './searchbar.type';

const SearchBar = ({
  data,
  handleData,
}: SearchBarProps): React.ReactElement => {
  const router = useRouter();

  const search = React.useCallback(() => {
    router.push('/list/announcements');
  }, [router]);

  return (
    <S.Container>
      <S.Wrapper type="dropdown">
        <Dropdown
          radius="middleSquare"
          label="Tipo do Imovel"
          placeholder="Escolha um"
          options={options.type}
          onSelect={(opt) => {
            handleData('type', opt.label);
          }}
          selectedValue={data?.type}
        />
      </S.Wrapper>
      <S.Wrapper type="input">
        <Input
          id="locale"
          label="Local"
          radius="none"
          type="text"
          name="locale"
          value={data?.locale}
          placeholder="Digite a cidade ou bairro"
          onChange={(el) => handleData(el.target.id, el.target.value)}
        />
      </S.Wrapper>
      <Button
        variant="primary-square"
        size="xsmall"
        radius="middleSquare"
        icon={<Search height={24} width={24} fill={colors.whiteGrey} />}
        onClick={search}
      />
    </S.Container>
  );
};

export { SearchBar };

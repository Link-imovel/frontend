import React from 'react';

import { Button } from '@components/generics/button';
import { SearchBar } from '@components/generics/searchbar';

import { Logo } from '@components/generics/icons/logo';

import * as S from './header.style';
import { HeaderProps } from './header.type';

const Header = ({
  title,
  subtitle,
  buttons,
  handleData,
}: HeaderProps): JSX.Element => {
  return (
    <S.Container>
      <S.HeadContent>
        <Button
          variant="transparent"
          icon={<Logo />}
          onClick={buttons.BLogo.callback}
        />
        <Button
          variant="secondary"
          label={buttons.BLogin.label || 'Entrar'}
          background="transparent"
          onClick={buttons.BLogin.callback}
        />
      </S.HeadContent>
      <S.MainContent>
        <SearchBar handleData={handleData} />
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
        <Button
          variant="primary"
          label={buttons.BShowImovels.label}
          onClick={buttons.BShowImovels.callback}
        />
      </S.MainContent>
    </S.Container>
  );
};

export { Header };

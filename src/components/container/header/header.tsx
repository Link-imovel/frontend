import React from 'react';

import { Button } from '@components/generics/button';
import { SearchBar } from '@components/generics/searchbar';

import { Logo } from '@components/generics/icons/logo';

import * as S from './header.style';
import { HeaderProps } from './header.type';
import { DropdownHeader } from '@components/generics/dropdownheader';
import { colors } from '@theme/theme/default';
import { Logout } from '@components/generics/icons/logout';

const Header = ({
  title,
  subtitle,
  buttons,
  handleData,
  handleValidation,
  data,
  valid,
  isLogged,
  userName,
  render,
}: HeaderProps): JSX.Element => {
  return (
    <S.Container>
      <S.HeadContent>
        <Button
          variant="transparent"
          icon={<Logo />}
          onClick={buttons.BLogo.callback}
        />
        {isLogged ? (
          <S.Wrapper>
            <DropdownHeader
              user={userName}
              color={colors.whiteGrey}
              render={render}
            />
            <S.Line />
            <Button
              variant="transparent"
              size="small"
              justifyContent="space-between"
              radius="square"
              icon={<Logout fill={colors.whiteGrey} />}
              onClick={buttons.BLogout.callback}
            />
          </S.Wrapper>
        ) : (
          <Button
            variant="secondary"
            label={buttons.BLogin.label || 'Entrar'}
            background="transparent"
            onClick={buttons.BLogin.callback}
          />
        )}
      </S.HeadContent>
      <S.MainContent>
        <SearchBar
          handleData={handleData}
          handleValidation={handleValidation}
          data={data}
          valid={valid}
        />
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

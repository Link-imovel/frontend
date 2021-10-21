import React from 'react';

import { Button } from '@components/generics/button';
import { Logo } from '@components/generics/logo';

import * as S from './header.style';
import { HeaderProps } from './header.type';

const Header = ({
  title,
  subtitle,
  icon,
  callback,
  labelSignIn,
  labelShowImovels,
}: HeaderProps): JSX.Element => {
  return (
    <S.HeaderContainer>
      <S.HeadWrapper>
        <Logo icon={icon} onClick={callback.logo} />
        <Button
          variant="secondary"
          label={labelSignIn || 'Entrar'}
          background="transparent"
          onClick={callback.login}
        />
      </S.HeadWrapper>
      <S.MainWrapper>
        <S.MainTitle>{title}</S.MainTitle>
        <S.MainSubtitle>{subtitle}</S.MainSubtitle>
        <Button
          variant="primary"
          label={labelShowImovels}
          onClick={callback.showImovels}
        />
      </S.MainWrapper>
    </S.HeaderContainer>
  );
};

export { Header };

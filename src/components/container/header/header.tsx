import React from 'react';

import { Button } from '@components/generics/button';
import { Logo } from '@components/generics/logo';
import { Link } from '@components/generics/icons/link';

import * as S from './header.style';
import { HeaderProps } from './header.type';

const Header = ({
  title,
  subtitle,
  icon,
  callbackLogo,
  callbackLogin,
  callbackShowImovels,
  labelSignIn,
  labelShowImovels,
}: HeaderProps): JSX.Element => {
  return (
    <S.HeaderContainer>
      <S.HeadWrapper>
        <Logo icon={icon} onClick={callbackLogo} />
        <Button
          variant="secondary"
          label={labelSignIn || 'Entrar'}
          background="transparent"
          onClick={callbackLogin}
        />
      </S.HeadWrapper>
      <S.MainWrapper>
        <S.MainTitle>{title}</S.MainTitle>
        <S.MainSubtitle>{subtitle}</S.MainSubtitle>
        <Button
          variant="primary"
          label={labelShowImovels}
          onClick={callbackShowImovels}
        />
      </S.MainWrapper>
    </S.HeaderContainer>
  );
};

export { Header };

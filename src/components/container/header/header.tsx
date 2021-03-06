import React from 'react';

import { Button } from '@components/generics/button';

import * as S from './header.style';
import { HeaderProps } from './header.type';

const Header = ({ title, subtitle, buttons }: HeaderProps): JSX.Element => {
  return (
    <S.HeaderContainer>
      <S.HeadWrapper>
        <Button
          variant="transparent-m-none"
          icon={buttons.BLogo.icon}
          onClick={buttons.BLogo.callback}
        />
        <Button
          variant="secondary"
          label={buttons.BLogin.label || 'Entrar'}
          background="transparent"
          onClick={buttons.BLogin.callback}
        />
      </S.HeadWrapper>
      <S.MainWrapper>
        <S.MainTitle>{title}</S.MainTitle>
        <S.MainSubtitle>{subtitle}</S.MainSubtitle>
        <Button
          variant="primary"
          label={buttons.BShowImovels.label}
          onClick={buttons.BShowImovels.callback}
        />
      </S.MainWrapper>
    </S.HeaderContainer>
  );
};

export { Header };

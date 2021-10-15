import React from 'react';

import { Button } from '@components/generics/button';
import { Logo } from '@components/generics/logo';
import { Link } from '@components/generics/icons/link';

import * as S from './header.style';

const Header = (): JSX.Element => {
  return (
    <S.HeaderContainer>
      <S.HeadWrapper>
        <Logo icon={<Link />} onClick={() => console.log('redirect')} />
        <Button
          variant="secondary"
          label="Entrar"
          background="transparent"
          onClick={() => console.log('redirect')}
        />
      </S.HeadWrapper>
      <S.MainWrapper>
        <S.MainTitle>A SUA FUTURA HOME SE ENCONTRA AQUI.</S.MainTitle>
        <S.MainSubtitle>
          Trazendo a maior variadade de imóveis que se adequa ao seu momento.
        </S.MainSubtitle>
        <Button
          variant="primary"
          label="Ver imóveis"
          onClick={() => console.log('redirect')}
        />
      </S.MainWrapper>
    </S.HeaderContainer>
  );
};

export { Header };

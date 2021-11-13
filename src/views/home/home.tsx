import React from 'react';

import { Page } from '@components/container/page';
import { Header } from '@components/container/header';
import { Footer } from '@components/container/footer';
import { Card } from '@components/generics/card';

import * as S from './home.styles';
import { HomeProps } from './home.type';

const Home = ({
  header,
  footer,
  cards,
}: Required<HomeProps>): React.ReactElement => {
  return (
    <Page header={<Header {...header} />} footer={<Footer {...footer} />}>
      <S.Container>
        <S.Title>Imóveis próximo a sua localidade</S.Title>
        <S.Wrapper>
          {cards.map((props, index) => (
            <Card key={index} {...props} />
          ))}
        </S.Wrapper>
      </S.Container>
    </Page>
  );
};

export { Home };

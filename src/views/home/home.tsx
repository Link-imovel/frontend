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
      <S.CardContainer>
        <S.CardWrapperTitle>
          Imóveis próximo a sua localidade
        </S.CardWrapperTitle>
        <S.CardWrapper>
          {cards.map((props, index) => (
            <Card key={index} {...props} />
          ))}
        </S.CardWrapper>
      </S.CardContainer>
    </Page>
  );
};

export { Home };

import React from 'react';

import { Page } from '@components/container/page';
import { Header } from '@components/container/header';

import * as S from './home.styles';
import { HomeProps } from './home.type';
import { Footer } from '@components/container/footer';

const Home = ({ header, footer }: Required<HomeProps>): React.ReactElement => {
  return (
    <Page>
      <S.HomeContainer>
        <Header {...header} />
        <S.CardWrapper></S.CardWrapper>
        <Footer {...footer} />
      </S.HomeContainer>
    </Page>
  );
};

export { Home };

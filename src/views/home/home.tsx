import React from 'react';

import { Page } from '@components/container/page';
import { Header } from '@components/container/header';

import * as S from './home.styles';
import { HomeProps } from './home.type';
import { Footer } from '@components/container/footer';

const Home = ({ header, footer }: Required<HomeProps>): React.ReactElement => {
  return (
    <Page header={<Header {...header} />} footer={<Footer {...footer} />}>
      <S.CardWrapper>
        <h1>Card</h1>
      </S.CardWrapper>
    </Page>
  );
};

export { Home };

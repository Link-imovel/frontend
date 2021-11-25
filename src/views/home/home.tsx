import React from 'react';
import dynamic from 'next/dynamic';

import { Page } from '@components/container/page';
import { Header } from '@components/container/header';
import { Footer } from '@components/container/footer';

import * as S from './home.styles';
import { HomeViewProps } from './home.type';

const GeolocationCard = dynamic(
  () => import('@components/generics/geolocationcard'),
  {
    ssr: false,
  }
);

const Home = ({
  header,
  footer,
  cards,
  handleData,
  handleValidation,
  data,
  valid,
  isLogged,
  userName,
}: HomeViewProps): React.ReactElement => {
  return (
    <Page
      header={
        <Header
          {...header}
          userName={userName}
          handleData={handleData}
          handleValidation={handleValidation}
          data={data}
          valid={valid}
          isLogged={isLogged}
        />
      }
      footer={<Footer {...footer} />}
    >
      <S.Container>
        <S.Title>Imóveis próximo a sua localidade</S.Title>
        <GeolocationCard cards={cards} />
      </S.Container>
    </Page>
  );
};

export { Home };

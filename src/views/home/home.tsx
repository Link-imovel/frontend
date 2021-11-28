import React from 'react';

import { Page } from '@components/container/page';
import { Header } from '@components/container/header';
import { Footer } from '@components/container/footer';
import { Card } from '@components/generics/card';
import { Card as CardContainer } from '@components/container/card';

import * as S from './home.styles';
import { HomeViewProps } from './home.type';

const Home = ({
  header,
  footer,
  cards,
  handleData,
  data,
  isLogged,
  userName,
  permissionType,
}: HomeViewProps): React.ReactElement => {
  return (
    <Page
      header={
        <Header
          {...header}
          userName={userName}
          handleData={handleData}
          data={data}
          isLogged={isLogged}
          permissionType={permissionType}
        />
      }
      footer={<Footer {...footer} />}
    >
      <S.Container>
        <S.Title>Imóveis próximo a sua localidade</S.Title>
        <S.Wrapper>
          {cards.length > 0
            ? cards.map((props, index) => <Card key={index} {...props} />)
            : [...Array(4)].map((_, i) => (
                <CardContainer size="small" key={i} onClick={() => {}} />
              ))}
        </S.Wrapper>
      </S.Container>
    </Page>
  );
};

export { Home };

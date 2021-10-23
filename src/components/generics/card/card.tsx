import React from 'react';

import * as S from './card.style';
import { CardProps } from './card.type';

import { Card as CardContainer } from '@components/container/card';
import { Carousel } from '@components/generics/carousel';

const Card = ({ images }: CardProps): JSX.Element => {
  return (
    <CardContainer>
      <Carousel images={images || ''} />
      <S.MainWrapper>
        <S.MainTitle>A partir de</S.MainTitle>
        <S.MainTitle>SQNW 303 Bloco A</S.MainTitle>
        <S.MainSubtitle>R$ 1.103.205</S.MainSubtitle>
        <S.MainSubtitle>Noroeste, Brasilia</S.MainSubtitle>
      </S.MainWrapper>
    </CardContainer>
  );
};

export { Card };

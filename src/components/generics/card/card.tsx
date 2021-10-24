import React from 'react';

import * as S from './card.style';
import { CardProps } from './card.type';

import { Card as CardContainer } from '@components/container/card';
import { Carousel } from '@components/generics/carousel';

import { Bathroom } from '../icons/bathroom/bathroom';
import { Bed } from '../icons/bed';
import { Car } from '../icons/car';
import { title } from 'process';

const Card = ({
  images,
  size,
  title,
  address,
  value,
  neighborhood,
  quantityRoom,
  quantityBathroom,
  quantityGarage,
  bathroom,
  bed,
  car,
}: CardProps): JSX.Element => {
  return (
    <CardContainer size={size || 'small'}>
      <Carousel images={images || ''} size={size || 'small'} />
      <S.CardBody size={size || 'small'}>
        <S.MainWrapper>
          <S.CardTitle>{title}</S.CardTitle>
          <S.CardAddress>{address}</S.CardAddress>
          <S.CardValue>{value} </S.CardValue>
          <S.CardNeighborhood>{neighborhood}</S.CardNeighborhood>
        </S.MainWrapper>
        <S.IconWrapper>
          <S.Bed>
            {bed || <Bed />} {quantityRoom} quarto(s)
          </S.Bed>
          <S.Bathroom>
            {bathroom || Bathroom} {quantityBathroom} banheiro(s)
          </S.Bathroom>
          <S.Car>
            {car || Car} {quantityGarage} vaga(s)
          </S.Car>
        </S.IconWrapper>
      </S.CardBody>
    </CardContainer>
  );
};

export { Card };

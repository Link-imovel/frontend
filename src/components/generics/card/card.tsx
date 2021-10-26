import React from 'react';

import * as S from './card.style';
import { CardProps } from './card.type';

import { Card as CardContainer } from '@components/container/card';
import { Button } from '@components/generics/button';
import { Carousel } from '@components/generics/carousel';

import { colors } from '@theme/theme/default';
import { Bathroom } from '../icons/bathroom/bathroom';
import { Bed } from '../icons/bed';
import { Car } from '../icons/car';
import { WhatsApp } from '../icons/whatsapp';
import { Navigation } from '../icons/navigation';

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
        <S.Wrapper>
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
          <S.ButtonsWrapper>
            <S.ButtonWhatsApp>
              <Button
                variant="primary-circle"
                size="small"
                radius="circle"
                icon={
                  <WhatsApp height={20} width={20} fill={colors.whiteGrey} />
                }
              />
            </S.ButtonWhatsApp>
            <S.ButtonNavigation>
              <Button
                variant="secondary-square"
                size="small"
                radius="square"
                icon={
                  <Navigation height={20} width={20} fill={colors.whiteGrey} />
                }
              />
            </S.ButtonNavigation>
            <S.ButtonContact>
              <Button
                variant="primary"
                label="Contatar"
                size="medium"
                background={colors.whiteGrey}
                color={colors.blackGrey}
              />
            </S.ButtonContact>
          </S.ButtonsWrapper>
        </S.Wrapper>
      </S.CardBody>
    </CardContainer>
  );
};

export { Card };

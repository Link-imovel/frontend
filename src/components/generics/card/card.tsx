import React from 'react';

import * as S from './card.style';
import { CardProps } from './card.type';

import { Card as CardContainer } from '@components/container/card';
import { Button } from '@components/generics/button';
import { Carousel } from '@components/generics/carousel';

import { Bathroom } from '../icons/bathroom/bathroom';
import { Bed } from '../icons/bed';
import { Car } from '../icons/car';
import { WhatsApp } from '../icons/whatsapp';
import { Navigation } from '../icons/navigation';
import { colors } from '@theme/theme/default/colors';

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
  visibility,
  quantityViews,
  labelViews,
  info,
  permIdentity,
  phoneIphone,
  name,
  phoneNumber,
  buttons,
}: CardProps): JSX.Element => {
  return (
    <CardContainer size={size || 'small'}>
      <Carousel images={images || ''} size={size || 'small'} />
      <S.CardBody size={size || 'small'}>
        <S.Wrapper sizePadding={size}>
          <S.MainWrapper>
            <S.CardTitle sizeWidth={size}>{title}</S.CardTitle>
            <S.CardAddress sizeWidth={size}>{address}</S.CardAddress>
            <S.CardVisibility sizeWidth={size}>
              {visibility}
              {quantityViews}
              {labelViews}
            </S.CardVisibility>
            <S.CardValue sizeWidth={size}>{value} </S.CardValue>
            <S.CardNeighborhood sizeWidth={size}>
              {neighborhood}
            </S.CardNeighborhood>
          </S.MainWrapper>
          <S.IconWrapper>
            <S.Bed sizeWidth={size}>
              {bed || <Bed />} {quantityRoom} quarto(s)
            </S.Bed>
            <S.Bathroom sizeWidth={size}>
              {bathroom || Bathroom} {quantityBathroom} banheiro(s)
            </S.Bathroom>
            <S.Car sizeWidth={size}>
              {car || Car} {quantityGarage} vaga(s)
            </S.Car>
          </S.IconWrapper>
          <S.InfoWrapper>
            <S.CardInfo>{info}</S.CardInfo>
            <S.PermIdentity sizeWidth={size} sizePadding={size}>
              {permIdentity} {name}
            </S.PermIdentity>
            <S.PhoneIphone sizeWidth={size} sizePadding={size}>
              {phoneIphone} {phoneNumber}
            </S.PhoneIphone>
          </S.InfoWrapper>
          <S.ButtonsWrapper>
            <S.ButtonWhatsApp sizeMargin={size}>
              <Button
                variant="primary-circle"
                size="small"
                radius="circle"
                icon={
                  <WhatsApp height={20} width={20} fill={colors.whiteGrey} />
                }
                onClick={buttons.BCircleWhatsApp.callback}
              />
            </S.ButtonWhatsApp>
            <S.ButtonNavigation>
              <Button
                variant="secondary-square"
                size={buttons.BNavigation.typeSize}
                label={buttons.BNavigation.label}
                radius="square"
                icon={
                  <Navigation height={20} width={20} fill={colors.whiteGrey} />
                }
                iconReverse={true}
                onClick={buttons.BNavigation.callback}
              />
            </S.ButtonNavigation>
            <S.ButtonContact>
              <Button
                variant="primary"
                label={buttons.BContact.label}
                size="medium"
                background={buttons.BContact.background}
                color={buttons.BContact.color}
                onClick={buttons.BContact.callback}
              />
            </S.ButtonContact>
          </S.ButtonsWrapper>
        </S.Wrapper>
      </S.CardBody>
    </CardContainer>
  );
};

export { Card };

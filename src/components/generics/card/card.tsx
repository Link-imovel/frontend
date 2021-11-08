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
import { Edit } from '../icons/edit';
import { Delete } from '../icons/delete';
import { colors } from '@theme/theme/default/colors';

const Card = ({
  variant,
  images,
  size,
  title,
  address,
  visibility,
  quantityViews,
  labelViews,
  value,
  neighborhood,
  quantityRoom,
  quantityBathroom,
  quantityGarage,
  bathroom,
  bed,
  car,
  info,
  permIdentity,
  phoneIphone,
  name,
  phoneNumber,
  buttons,
  onClick,
}: CardProps): JSX.Element => {
  return (
    <CardContainer size={size || 'small'} onClick={onClick}>
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
          {size === 'normal' && (
            <S.InfoWrapper>
              <S.CardInfo>{info}</S.CardInfo>
              <S.PermIdentity>
                {permIdentity} {name}
              </S.PermIdentity>
              <S.PhoneIphone>
                {phoneIphone} {phoneNumber}
              </S.PhoneIphone>
            </S.InfoWrapper>
          )}
          <S.ButtonsWrapper>
            <S.ButtonWhatsApp margin={variant}>
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
            {variant === 'tertiary' && (
              <S.ButtonEdit>
                <Button
                  variant="transparent"
                  size="small"
                  radius="square"
                  icon={<Edit height={20} width={20} fill={colors.whiteGrey} />}
                  onClick={buttons.BEdit?.callback}
                />
              </S.ButtonEdit>
            )}
            {variant === 'tertiary' && (
              <S.ButtonDelete>
                <Button
                  variant="transparent"
                  size="small"
                  radius="square"
                  icon={
                    <Delete height={20} width={20} fill={colors.whiteGrey} />
                  }
                  onClick={buttons.BDelete?.callback}
                />
              </S.ButtonDelete>
            )}
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

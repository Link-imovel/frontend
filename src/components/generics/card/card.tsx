import React from 'react';

import { Card as Container } from '@components/container/card';
import { Button } from '@components/generics/button';
import { Carousel } from '@components/generics/carousel';

import { Bathroom } from '../icons/bathroom/bathroom';
import { Bed } from '../icons/bed';
import { Car } from '../icons/car';
import { WhatsApp } from '../icons/whatsapp';
import { Navigation } from '../icons/navigation';
import { Edit } from '../icons/edit';
import { Delete } from '../icons/delete';
import { Visibility } from '../icons/visibility';
import { PermIdentity } from '../icons/permidentity';
import { PhoneIphone } from '../icons/phoneiphone';

import * as S from './card.style';
import { CardProps } from './card.type';
import { colors } from '@theme/theme/default/colors';
import { Formatters } from '@helpers/formatters';

const Card = ({
  variant,
  size,
  publication,
  buttons,
  onClick,
}: CardProps): React.ReactElement => {
  const renderInfo = React.useCallback((): JSX.Element | null => {
    if (size === 'normal') {
      return (
        <>
          <S.InfoContent>
            <S.Info>Apartamento 2 E 3 Quartos no Noroeste - Vivant</S.Info>
            <S.IconContainer>
              <S.IconContent variant="secondary">
                <PermIdentity fill={colors.greyBlue} /> <span>John Field</span>
              </S.IconContent>
              <S.IconContent variant="secondary">
                <PhoneIphone fill={colors.greyBlue} />{' '}
                <span>{publication.phone}</span>
              </S.IconContent>
            </S.IconContainer>
          </S.InfoContent>
        </>
      );
    }
    return null;
  }, [publication.phone, size]);

  const renderFunctions = React.useCallback((): JSX.Element | null => {
    if (variant === 'ternary') {
      return (
        <>
          <S.ButtonContent type="edit">
            <Button
              variant="transparent"
              size="small"
              radius="square"
              icon={<Edit height={20} width={20} fill={colors.whiteGrey} />}
              onClick={buttons.BEdit?.callback}
            />
          </S.ButtonContent>
          <S.ButtonContent type="delete">
            <Button
              variant="transparent"
              size="small"
              radius="square"
              icon={<Delete height={20} width={20} fill={colors.whiteGrey} />}
              onClick={buttons.BDelete?.callback}
            />
          </S.ButtonContent>
        </>
      );
    }
    return null;
  }, [buttons.BDelete?.callback, buttons.BEdit?.callback, variant]);

  const renderViews = React.useCallback((): JSX.Element | null => {
    if (variant === 'secondary' || variant === 'ternary') {
      return (
        <>
          <S.Content sizeWidth={size}>
            <Visibility /> <span>{publication.views} views</span>
          </S.Content>
        </>
      );
    }
    return null;
  }, [publication.views, size, variant]);

  return (
    <Container size={size || 'small'} onClick={onClick}>
      <Carousel images={publication.home.images || ''} size={size || 'small'} />
      <S.Body size={size || 'small'}>
        <S.Wrapper sizePadding={size}>
          <S.MainContent>
            <S.Title sizeWidth={size}>A partir de</S.Title>
            <S.Address sizeWidth={size}>{publication.home.ref}</S.Address>
            {renderViews()}
            <S.Value sizeWidth={size}>
              {Formatters.formatPrice(String(publication.home.value))}
            </S.Value>
            <S.Location sizeWidth={size}>
              {publication.home.address.state}, {publication.home.address.city}
            </S.Location>
          </S.MainContent>
          <S.IconContainer>
            <S.IconContent sizeWidth={size} variant="primary">
              <Bed fill={colors.greyBlue} />{' '}
              <span>{publication.home.bedroom} quarto(s)</span>
            </S.IconContent>
            <S.IconContent sizeWidth={size} variant="primary">
              <Bathroom fill={colors.greyBlue} />{' '}
              <span>{publication.home.bathroom} banheiro(s)</span>
            </S.IconContent>
            <S.IconContent sizeWidth={size} variant="primary">
              <Car fill={colors.greyBlue} />{' '}
              <span>{publication.home.garage} vaga(s)</span>
            </S.IconContent>
          </S.IconContainer>
          {renderInfo()}
          <S.ButtonContainer>
            <S.ButtonContent margin={variant} type="default">
              <Button
                variant="primary-circle"
                size="small"
                radius="circle"
                icon={
                  <WhatsApp height={20} width={20} fill={colors.whiteGrey} />
                }
                onClick={buttons.BCircleWhatsApp.callback}
              />
            </S.ButtonContent>
            {renderFunctions()}
            <S.ButtonContent type="navigation">
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
            </S.ButtonContent>
            <S.ButtonContent type="default">
              <Button
                variant="primary"
                label={buttons.BContact.label}
                size="medium"
                background={colors.whiteGrey}
                color={colors.blackGrey}
                onClick={buttons.BContact.callback}
              />
            </S.ButtonContent>
          </S.ButtonContainer>
        </S.Wrapper>
      </S.Body>
    </Container>
  );
};

export { Card };

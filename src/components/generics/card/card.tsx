import React from 'react';
import { useRouter } from 'next/router';

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
import { useBoxMessage } from '@hooks/boxmessage';

const Card = ({
  variant,
  size,
  publication,
  views,
  functionalities,
  buttons,
  onClick,
}: CardProps): React.ReactElement => {
  const router = useRouter();
  const { openModal } = useBoxMessage();

  const sendMessageWhatsapp = React.useCallback(() => {
    const msg = encodeURI(
      `Olá, me interessei por este imóvel que vi na Link_. http://localhost:3000/description/${publication?.id}`
    );
    window.open(`https://wa.me/${publication?.phone}?text=${msg}`);
  }, [publication?.id, publication?.phone]);

  const description = React.useCallback(() => {
    router.push(`/description/${publication?.id}`);
  }, [publication.id, router]);

  const openGoogleMap = React.useCallback(() => {
    window.open(
      `https://maps.google.com/?q=${
        publication?.home?.address?.location?.coordinates[1] || 0
      },${publication?.home?.address?.location?.coordinates[0] || 0}`,
      '_blank'
    );
  }, [publication?.home?.address?.location?.coordinates]);

  const renderInfo = React.useCallback((): JSX.Element | null => {
    if (size === 'normal') {
      return (
        <>
          <S.InfoContent>
            <S.Info>{publication?.title}</S.Info>
            <S.IconContainer>
              <S.IconContent variant="secondary">
                <PermIdentity fill={colors.greyBlue} />{' '}
                <span>
                  {publication?.user?.firstName} {publication?.user?.lastName}
                </span>
              </S.IconContent>
              <S.IconContent variant="secondary">
                <PhoneIphone fill={colors.greyBlue} />{' '}
                <span>{publication?.phone}</span>
              </S.IconContent>
            </S.IconContainer>
          </S.InfoContent>
        </>
      );
    }
    return null;
  }, [
    publication?.phone,
    publication?.title,
    publication?.user?.firstName,
    publication?.user?.lastName,
    size,
  ]);

  const renderFunctions = React.useCallback((): JSX.Element | null => {
    if (functionalities) {
      return (
        <>
          <S.ButtonContent type="edit">
            <Button
              variant="transparent"
              size="small"
              radius="square"
              icon={<Edit height={20} width={20} fill={colors.whiteGrey} />}
              onClick={() => router.push('/announcement/address')}
            />
          </S.ButtonContent>
          <S.ButtonContent type="delete">
            <Button
              variant="transparent"
              size="small"
              radius="square"
              icon={<Delete height={20} width={20} fill={colors.whiteGrey} />}
              onClick={() => openModal(publication?.id)}
            />
          </S.ButtonContent>
        </>
      );
    }
    return null;
  }, [functionalities, openModal, publication?.id, router]);

  const renderViews = React.useCallback((): JSX.Element | null => {
    if (views) {
      return (
        <>
          <S.Content sizeWidth={size}>
            <Visibility fill={colors.greyBlue} />{' '}
            <span>{publication?.views} views</span>
          </S.Content>
        </>
      );
    }
    return null;
  }, [publication?.views, size, views]);

  return (
    <Container size={size || 'small'} onClick={onClick}>
      <Carousel
        images={publication.home?.images || ''}
        size={size || 'small'}
      />
      <S.Body size={size || 'small'}>
        <S.Wrapper sizePadding={size}>
          <S.MainContent>
            <S.Title sizeWidth={size}>A partir de</S.Title>
            <S.Address sizeWidth={size}>{publication?.home?.ref}</S.Address>
            {renderViews()}
            <S.Value sizeWidth={size}>
              {Formatters.formatPrice(String(publication?.home?.value))}
            </S.Value>
            <S.Location sizeWidth={size}>
              {publication?.home?.address?.state},{' '}
              {publication?.home?.address?.city}
            </S.Location>
          </S.MainContent>
          <S.IconContainer>
            <S.IconContent sizeWidth={size} variant="primary">
              <Bed fill={colors.greyBlue} />{' '}
              <span>{publication?.home?.bedroom} quarto(s)</span>
            </S.IconContent>
            <S.IconContent sizeWidth={size} variant="primary">
              <Bathroom fill={colors.greyBlue} />{' '}
              <span>{publication?.home?.bathroom} banheiro(s)</span>
            </S.IconContent>
            <S.IconContent sizeWidth={size} variant="primary">
              <Car fill={colors.greyBlue} />{' '}
              <span>{publication?.home?.garage} vaga(s)</span>
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
                onClick={sendMessageWhatsapp}
              />
            </S.ButtonContent>
            {renderFunctions()}
            <S.ButtonContent type="navigation">
              <Button
                variant="secondary-square"
                size={buttons?.googleMap?.size}
                label={buttons?.googleMap?.label || ''}
                radius="square"
                icon={
                  <Navigation height={20} width={20} fill={colors.whiteGrey} />
                }
                iconReverse={true}
                onClick={openGoogleMap}
              />
            </S.ButtonContent>
            <S.ButtonContent type="default">
              <Button
                variant="primary"
                label={buttons?.visualize?.label || 'Visualizar'}
                size={buttons?.visualize?.size}
                background={colors.whiteGrey}
                color={colors.blackGrey}
                onClick={description}
              />
            </S.ButtonContent>
          </S.ButtonContainer>
        </S.Wrapper>
      </S.Body>
    </Container>
  );
};

export { Card };

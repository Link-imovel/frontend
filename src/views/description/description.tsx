import React from 'react';
import dynamic from 'next/dynamic';

import { Page } from '@components/container/page';
import { Button } from '@components/generics/button';
import { Gallery } from '@components/container/gallery';
import { Contact } from '@components/generics/contact';
import { UserView } from '@components/generics/userview';

import { Logo } from '@components/generics/icons/logo';
import { Chair } from '@components/generics/icons/chair';
import { FlatWare } from '@components/generics/icons/flatware';
import { DryCleaning } from '@components/generics/icons/drycleaning';
import { Calendar } from '@components/generics/icons/calendar';
import { Building } from '@components/generics/icons/building';
import { Bathroom } from '@components/generics/icons/bathroom';
import { Bed } from '@components/generics/icons/bed';
import { Car } from '@components/generics/icons/car';
import { Area } from '@components/generics/icons/area';

import * as S from './description.style';
import { DesciptionProps } from './description.type';
import { colors } from '@theme/theme/default';
import { Formatters } from '@helpers/formatters';

const Map = dynamic(() => import('@components/generics/map'), { ssr: false });

const Description = ({
  user,
  isLogged,
  buttons,
  home,
  handleData,
  place,
}: DesciptionProps): React.ReactElement => {
  return (
    <Page>
      <S.Container>
        <S.HeaderContent>
          <Button
            variant="transparent"
            size="xsmall"
            radius="square"
            icon={<Logo fill={colors.blackGrey} />}
            onClick={buttons.BLogo.callback}
          />
          {isLogged ? (
            <UserView user={user} />
          ) : (
            <Button
              variant="primary"
              label={buttons.BLogin.label || 'Entrar'}
              onClick={buttons.BLogin.callback}
            />
          )}
        </S.HeaderContent>
        <S.Content variant="flex">
          <S.Wrapper>
            <S.Title variant="primary">
              {home.type} - {home.address.neighborhood}
            </S.Title>
            <S.Subtitle>
              {home.address.number}, {home.address.street}, {home.address.state}
              , {home.address.city}
            </S.Subtitle>
          </S.Wrapper>
          <S.Value>{Formatters.formatPrice(String(home.value))}</S.Value>
        </S.Content>
        <Gallery backgroundColor={colors.blackGrey} />
        <S.Line />
        <S.Content variant="grid">
          <S.Wrapper>
            <S.OverviewContent>
              <S.Title variant="secondary">Overview do Proprietario</S.Title>
              <S.IconContent>
                <S.IconContainer>
                  <S.Wrapper hasIcon={true}>
                    <Bathroom width={20} height={20} />{' '}
                    <span>{home.bathroom} Banheiro</span>
                  </S.Wrapper>
                  <S.Wrapper hasIcon={true}>
                    <Bed width={20} height={20} />{' '}
                    <span>{home.bedroom} Quartos</span>
                  </S.Wrapper>
                  <S.Wrapper hasIcon={true}>
                    <Car width={20} height={20} />{' '}
                    <span>{home.garage} Vagas</span>
                  </S.Wrapper>
                </S.IconContainer>
                <S.IconContainer>
                  <S.Wrapper hasIcon={true}>
                    <Chair width={20} height={20} />{' '}
                    <span>{home.room} Salas</span>
                  </S.Wrapper>
                  <S.Wrapper hasIcon={true}>
                    <FlatWare width={20} height={20} />{' '}
                    <span>{home.kitchen} Cozinha</span>
                  </S.Wrapper>
                  <S.Wrapper hasIcon={true}>
                    <DryCleaning width={20} height={20} />{' '}
                    <span>{home.serviceArea} Area de serviço</span>
                  </S.Wrapper>
                </S.IconContainer>
                <S.IconContainer>
                  <S.Wrapper hasIcon={true}>
                    <Calendar width={20} height={20} />{' '}
                    <span>Ano da construção: {home.buildAt}</span>
                  </S.Wrapper>
                  <S.Wrapper hasIcon={true}>
                    <Building width={20} height={20} />{' '}
                    <span>Tipo do Imovel: {home.type}</span>
                  </S.Wrapper>
                  <S.Wrapper hasIcon={true}>
                    <Area width={20} height={20} />{' '}
                    <span>
                      Area total do imóvel : {home.totalArea}m<sup>2</sup>
                    </span>
                  </S.Wrapper>
                </S.IconContainer>
              </S.IconContent>
            </S.OverviewContent>
            <S.Line />
            <S.DescriptionContent>
              <S.Title variant="secondary">Descrição</S.Title>
              <S.Text>{home.description}</S.Text>
            </S.DescriptionContent>
          </S.Wrapper>
          <S.ContactContainer>
            <Contact handleData={handleData} />
          </S.ContactContainer>
        </S.Content>
        <S.LocateContent>
          <S.Title variant="secondary">Localização</S.Title>
          <S.MapContainer>
            <Map location={place.location} />
          </S.MapContainer>
        </S.LocateContent>
      </S.Container>
    </Page>
  );
};

export { Description };

import React from 'react';
import dynamic from 'next/dynamic';

import { Page } from '@components/container/page';
import { Button } from '@components/generics/button';
import { Gallery } from '@components/container/gallery';
import { Contact } from '@components/generics/contact';
import { DropdownHeader } from '@components/generics/dropdownheader';

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
import { Logout } from '@components/generics/icons/logout';

import * as S from './description.style';
import { DescriptionViewProps } from './description.type';
import { colors } from '@theme/theme/default';
import { Formatters } from '@helpers/formatters';

const Map = dynamic(() => import('@components/generics/map'), { ssr: false });

const Description = ({
  user,
  isLogged,
  buttons,
  publication,
  handleData,
  render,
}: DescriptionViewProps): React.ReactElement => {
  const { data, location } = publication;

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
            <S.DropdownContent>
              <DropdownHeader user={user} render={render} />
              <S.Line type="line-small" />
              <Button
                variant="transparent"
                size="small"
                justifyContent="space-between"
                radius="square"
                icon={<Logout fill={colors.blackGrey} />}
                onClick={buttons.BLogout.callback}
              />
            </S.DropdownContent>
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
            <S.Title variant="primary">{data.title}</S.Title>
            <S.Subtitle>
              {data.home.address.number}, {data.home.address.street},{' '}
              {data.home.address.state}, {data.home.address.city}
            </S.Subtitle>
          </S.Wrapper>
          <S.Value>{Formatters.formatPrice(String(data.home.value))}</S.Value>
        </S.Content>
        <Gallery backgroundColor={colors.blackGrey} />
        <S.Line type="line-large" />
        <S.Content variant="grid">
          <S.Wrapper>
            <S.OverviewContent>
              <S.Title variant="secondary">Overview do Proprietario</S.Title>
              <S.IconContent>
                <S.IconContainer>
                  <S.Wrapper hasIcon={true}>
                    <Bathroom width={20} height={20} />{' '}
                    <span>{data.home.bathroom} Banheiro</span>
                  </S.Wrapper>
                  <S.Wrapper hasIcon={true}>
                    <Bed width={20} height={20} />{' '}
                    <span>{data.home.bedroom} Quartos</span>
                  </S.Wrapper>
                  <S.Wrapper hasIcon={true}>
                    <Car width={20} height={20} />{' '}
                    <span>{data.home.garage} Vagas</span>
                  </S.Wrapper>
                </S.IconContainer>
                <S.IconContainer>
                  <S.Wrapper hasIcon={true}>
                    <Chair width={20} height={20} />{' '}
                    <span>{data.home.room} Salas</span>
                  </S.Wrapper>
                  <S.Wrapper hasIcon={true}>
                    <FlatWare width={20} height={20} />{' '}
                    <span>{data.home.kitchen} Cozinha</span>
                  </S.Wrapper>
                  <S.Wrapper hasIcon={true}>
                    <DryCleaning width={20} height={20} />{' '}
                    <span>{data.home.serviceArea} Area de serviço</span>
                  </S.Wrapper>
                </S.IconContainer>
                <S.IconContainer>
                  <S.Wrapper hasIcon={true}>
                    <Calendar width={20} height={20} />{' '}
                    <span>Ano da construção: {data.home.buildAt}</span>
                  </S.Wrapper>
                  <S.Wrapper hasIcon={true}>
                    <Building width={20} height={20} />{' '}
                    <span>Tipo do Imovel: {data.home.type}</span>
                  </S.Wrapper>
                  <S.Wrapper hasIcon={true}>
                    <Area width={20} height={20} />{' '}
                    <span>
                      Area total do imóvel : {data.home.totalArea}m<sup>2</sup>
                    </span>
                  </S.Wrapper>
                </S.IconContainer>
              </S.IconContent>
            </S.OverviewContent>
            <S.Line type="line-large" />
            <S.DescriptionContent>
              <S.Title variant="secondary">Descrição</S.Title>
              <S.Text>{data.home.description}</S.Text>
            </S.DescriptionContent>
          </S.Wrapper>
          <S.ContactContainer>
            <Contact handleData={handleData} />
          </S.ContactContainer>
        </S.Content>
        <S.LocateContent>
          <S.Title variant="secondary">Localização</S.Title>
          <S.MapContainer>
            <Map {...location} />
          </S.MapContainer>
        </S.LocateContent>
      </S.Container>
    </Page>
  );
};

export { Description };

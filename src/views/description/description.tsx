import React from 'react';
import dynamic from 'next/dynamic';

import { Page } from '@components/container/page';
import { Button } from '@components/generics/button';
import { Gallery } from '@components/generics/gallery';
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
  permissionType,
}: DescriptionViewProps): React.ReactElement => {
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
              <DropdownHeader user={user} permissionType={permissionType} />
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
            <S.Title variant="primary">{publication?.title}</S.Title>
            <S.Subtitle>
              <S.Address>{publication?.home?.address?.street}, </S.Address>
              <S.Address>{publication?.home?.address?.number}</S.Address>
              <S.Address>
                {publication?.home?.address?.street2
                  ? ', ' + publication?.home?.address?.street2
                  : ' '}
              </S.Address>
              <S.Address>- {publication?.home?.address?.state} - </S.Address>
              <S.Address>{publication?.home?.address?.city}</S.Address>
            </S.Subtitle>
          </S.Wrapper>
          <S.Value>
            {Formatters.formatPrice(String(publication?.home?.value))}
          </S.Value>
        </S.Content>
        <Gallery images={publication?.home?.images} />
        <S.Line type="line-large" />
        <S.Content variant="grid">
          <S.Wrapper>
            <S.OverviewContent>
              <S.Title variant="secondary">Overview do Proprietario</S.Title>
              <S.IconContent>
                <S.IconContainer>
                  <S.Wrapper hasIcon={true}>
                    <Bathroom width={20} height={20} />{' '}
                    <span>
                      {publication?.home?.bathroom} Banheiro
                      {publication?.home?.bathroom > 1 && 's'}
                    </span>
                  </S.Wrapper>
                  <S.Wrapper hasIcon={true}>
                    <Bed width={20} height={20} />{' '}
                    <span>
                      {publication?.home?.bedroom} Quarto
                      {publication?.home?.bedroom > 1 && 's'}
                    </span>
                  </S.Wrapper>
                  <S.Wrapper hasIcon={true}>
                    <Car width={20} height={20} />{' '}
                    <span>
                      {publication?.home?.garage} Vaga
                      {publication?.home?.garage > 1 && 's'}
                    </span>
                  </S.Wrapper>
                </S.IconContainer>
                <S.IconContainer>
                  <S.Wrapper hasIcon={true}>
                    <Chair width={20} height={20} />{' '}
                    <span>
                      {publication?.home?.room} Sala
                      {publication?.home?.room > 1 && 's'}
                    </span>
                  </S.Wrapper>
                  <S.Wrapper hasIcon={true}>
                    <FlatWare width={20} height={20} />{' '}
                    <span>
                      {publication?.home?.kitchen} Cozinha
                      {publication?.home?.kitchen > 1 && 's'}
                    </span>
                  </S.Wrapper>
                  <S.Wrapper hasIcon={true}>
                    <DryCleaning width={20} height={20} />{' '}
                    <span>
                      {publication?.home?.serviceArea} Area
                      {publication?.home?.serviceArea > 1 && 's'} de serviço
                    </span>
                  </S.Wrapper>
                </S.IconContainer>
                <S.IconContainer>
                  <S.Wrapper hasIcon={true}>
                    <Calendar width={20} height={20} />{' '}
                    <span>
                      Ano da construção:{' '}
                      {new Date(publication?.home?.buildAt).toLocaleDateString(
                        'pt-BR'
                      )}
                    </span>
                  </S.Wrapper>
                  <S.Wrapper hasIcon={true}>
                    <Building width={20} height={20} />{' '}
                    <span>Tipo do Imovel: {publication?.home?.type}</span>
                  </S.Wrapper>
                  <S.Wrapper hasIcon={true}>
                    <Area width={20} height={20} />{' '}
                    <span>
                      Area total do imóvel : {publication?.home?.totalArea}m
                      <sup>2</sup>
                    </span>
                  </S.Wrapper>
                </S.IconContainer>
              </S.IconContent>
            </S.OverviewContent>
            <S.Line type="line-large" />
            <S.DescriptionContent>
              <S.Title variant="secondary">Descrição</S.Title>
              <S.Text>{publication?.home?.description}</S.Text>
            </S.DescriptionContent>
          </S.Wrapper>
          <S.ContactContainer>
            <Contact handleData={handleData} />
          </S.ContactContainer>
        </S.Content>
        <S.LocateContent>
          <S.Title variant="secondary">Localização</S.Title>
          <S.MapContainer>
            <Map
              coordinates={publication?.home?.address?.location?.coordinates}
            />
          </S.MapContainer>
        </S.LocateContent>
      </S.Container>
    </Page>
  );
};

export { Description };

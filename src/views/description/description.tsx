import React from 'react';
import dynamic from 'next/dynamic';

import { Page } from '@components/container/page';
import { Button } from '@components/generics/button';
import { Gallery } from '@components/container/gallery';
import { Contact } from '@components/container/contact';

import * as S from './description.style';
import { Logo } from '@components/generics/icons/logo';
import { User } from '@components/generics/icons/user';
import { Chair } from '@components/generics/icons/chair';
import { FlatWare } from '@components/generics/icons/flatware';
import { DesciptionProps } from './description.type';
import { colors } from '@theme/theme/default';
import { DryCleaning } from '@components/generics/icons/drycleaning';
import { Calendar } from '@components/generics/icons/calendar';
import { Building } from '@components/generics/icons/building';
import { Area } from '@components/generics/icons/area';

const Map = dynamic(() => import('@components/container/map'), { ssr: false });

const Description = ({
  isLogged,
  buttons,
  title,
  subtitle,
  text,
  value,
  handleData,
  place,
  overview,
}: Required<DesciptionProps>): React.ReactElement => {
  return (
    <Page>
      <S.DescriptionContainer>
        <S.HeaderWrapper>
          <Button
            variant="transparent"
            size="xsmall"
            radius="square"
            icon={<Logo fill={colors.blackGrey} />}
            onClick={buttons.BLogo.callback}
          />
          {isLogged ? (
            <Button
              variant="secondary"
              label="Olá, John"
              color={colors.blackGrey}
              iconReverse={true}
              icon={<User width={20} height={20} />}
            />
          ) : (
            <Button
              variant="primary"
              label={buttons.BLogin.label || 'Entrar'}
              onClick={buttons.BLogin.callback}
            />
          )}
        </S.HeaderWrapper>
        <S.DescriptionWrapper variant="flex">
          <S.Wrapper>
            <S.DescriptionTitle>{title}</S.DescriptionTitle>
            <S.DescriptionSubtitle>{subtitle}</S.DescriptionSubtitle>
          </S.Wrapper>
          <S.DescriptionValue>{value}</S.DescriptionValue>
        </S.DescriptionWrapper>
        <Gallery backgroundColor={colors.blackGrey} />
        <S.Line />
        <S.DescriptionWrapper variant="grid">
          <S.Wrapper>
            <S.DescriptionOverviewWrapper>
              <S.DescriptionOverviewTitle>
                Overview do Proprietario
              </S.DescriptionOverviewTitle>
              <S.DescriptionIconContainer>
                <S.DescriptionIconWrapper>
                  <S.Wrapper hasIcon={true}>
                    <User width={20} height={20} />{' '}
                    <span>{overview.bathroom} Banheiro</span>
                  </S.Wrapper>
                  <S.Wrapper hasIcon={true}>
                    <User width={20} height={20} />{' '}
                    <span>{overview.bedroom} Quartos</span>
                  </S.Wrapper>
                  <S.Wrapper hasIcon={true}>
                    <User width={20} height={20} />{' '}
                    <span>{overview.garage} Vagas</span>
                  </S.Wrapper>
                </S.DescriptionIconWrapper>
                <S.DescriptionIconWrapper>
                  <S.Wrapper hasIcon={true}>
                    <Chair width={20} height={20} />{' '}
                    <span>{overview.livingroom} Salas</span>
                  </S.Wrapper>
                  <S.Wrapper hasIcon={true}>
                    <FlatWare width={20} height={20} />{' '}
                    <span>{overview.kitchen} Cozinha</span>
                  </S.Wrapper>
                  <S.Wrapper hasIcon={true}>
                    <DryCleaning width={20} height={20} />{' '}
                    <span>{overview.laundry} Area de serviço</span>
                  </S.Wrapper>
                </S.DescriptionIconWrapper>
                <S.DescriptionIconWrapper>
                  <S.Wrapper hasIcon={true}>
                    <Calendar width={20} height={20} />{' '}
                    <span>Ano da construção: {overview.constructionYear}</span>
                  </S.Wrapper>
                  <S.Wrapper hasIcon={true}>
                    <Building width={20} height={20} />{' '}
                    <span>Tipo do Imovel: {overview.typeImovel}</span>
                  </S.Wrapper>
                  <S.Wrapper hasIcon={true}>
                    <Area width={20} height={20} />{' '}
                    <span>Area total do imóvel : {overview.areaImovel}</span>
                  </S.Wrapper>
                </S.DescriptionIconWrapper>
              </S.DescriptionIconContainer>
            </S.DescriptionOverviewWrapper>
            <S.Line />
            <S.DescriptionTextWrapper>
              <S.DescriptionTextTitle>Descrição</S.DescriptionTextTitle>
              <S.DescriptionText>{text}</S.DescriptionText>
            </S.DescriptionTextWrapper>
          </S.Wrapper>
          <S.DescriptionContactWrapper>
            <Contact handleData={handleData} />
          </S.DescriptionContactWrapper>
        </S.DescriptionWrapper>
        <S.DescriptionLocateWrapper>
          <S.DescriptionLocateTitle>Localização</S.DescriptionLocateTitle>
          <S.DescriptionMapWrapper>
            <Map location={place.location} />
          </S.DescriptionMapWrapper>
        </S.DescriptionLocateWrapper>
      </S.DescriptionContainer>
    </Page>
  );
};

export { Description };

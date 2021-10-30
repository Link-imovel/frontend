import React from 'react';

import { Page } from '@components/container/page';
import { Button } from '@components/generics/button';
import { Input } from '@components/generics/input';

import * as S from './address.style';
import { AddressProps } from './address.type';
import { colors } from '@theme/theme/default';
import { Logo } from '@components/generics/icons/logo';
import { BreadCrumb } from '@components/generics/breadcrumb';
import { ArrowBefore } from '@components/generics/icons/arrowbefore';
import { ArrowAfter } from '@components/generics/icons/arrowafter';

const Address = ({
  title,
  buttons,
  breadCrumb,
  handleData,
}: Required<AddressProps>): React.ReactElement => {
  return (
    <Page>
      <S.AddressContainer>
        <S.AddressWrapper>
          <Button
            variant="transparent"
            size="xsmall"
            radius="square"
            icon={<Logo fill={colors.blackGrey} />}
            onClick={buttons.BLogo.callback}
          />
          <BreadCrumb paths={breadCrumb.paths} />
          <S.AddressNavigationWrapper>
            <Button
              variant="transparent"
              label={buttons.BArrowBefore.label}
              justifyContent="space-between"
              color={colors.blackGrey}
              size="xsmall"
              radius="square"
              iconReverse={true}
              icon={<ArrowBefore height={20} width={20} />}
              onClick={buttons.BArrowBefore.callback}
            />
            <Button
              variant="transparent"
              label={buttons.BArrowAfter.label}
              justifyContent="space-between"
              color={colors.blackGrey}
              size="xsmall"
              radius="square"
              icon={<ArrowAfter height={20} width={20} />}
              onClick={buttons.BArrowBefore.callback}
            />
          </S.AddressNavigationWrapper>
          <S.AddressTitle>{title}</S.AddressTitle>
          <S.InputWrapper>
            <S.InputsColumnOne>
              <Input
                id="street"
                label="Endereço"
                type="text"
                name="street"
                placeholder="Informe o endereço"
                onChange={(el) => handleData(el.target.id, el.target.value)}
                validators={[
                  {
                    type: 'Required',
                    message: 'Campo é requerido',
                  },
                ]}
              />
              <Input
                id="street2"
                label="Endereço 2"
                type="text"
                name="street2"
                placeholder="Informe o endereço 2"
                onChange={(el) => handleData(el.target.id, el.target.value)}
              />
              <Input
                id="number"
                label="Numero"
                type="text"
                name="number"
                placeholder="Informe o numero"
                onChange={(el) => handleData(el.target.id, el.target.value)}
                validators={[
                  {
                    type: 'Required',
                    message: 'Campo é requerido',
                  },
                ]}
              />
              <Input
                id="neighbourhood"
                label="Próximo"
                type="text"
                name="neighbourhood"
                placeholder="Informe a aproximidade"
                onChange={(el) => handleData(el.target.id, el.target.value)}
                validators={[
                  {
                    type: 'Required',
                    message: 'Campo é requerido',
                  },
                ]}
              />
            </S.InputsColumnOne>
            <S.InputsColumnTwo>
              <Input
                id="city"
                label="Cidade"
                type="text"
                name="city"
                placeholder="Informe a Cidade"
                onChange={(el) => handleData(el.target.id, el.target.value)}
                validators={[
                  {
                    type: 'Required',
                    message: 'Campo é requerido',
                  },
                ]}
              />
              <Input
                id="state"
                label="Estado"
                type="text"
                name="state"
                placeholder="Informe o Estado"
                onChange={(el) => handleData(el.target.id, el.target.value)}
                validators={[
                  {
                    type: 'Required',
                    message: 'Campo é requerido',
                  },
                ]}
              />
              <Input
                id="zipcode"
                label="CEP"
                type="text"
                name="zipcode"
                placeholder="Informe o CEP"
                onChange={(el) => handleData(el.target.id, el.target.value)}
                validators={[
                  {
                    type: 'Required',
                    message: 'Campo é requerido',
                  },
                ]}
              />
              <Input
                id="ibge"
                label="IBGE"
                type="text"
                name="ibge"
                placeholder="Informe o IBGE"
                onChange={(el) => handleData(el.target.id, el.target.value)}
                validators={[
                  {
                    type: 'Required',
                    message: 'Campo é requerido',
                  },
                ]}
              />
            </S.InputsColumnTwo>
            <Button
              variant="primary"
              label={buttons.BGeneric.label}
              size="large"
              radius="square"
              onClick={buttons.BGeneric.callback}
            />
          </S.InputWrapper>
        </S.AddressWrapper>
      </S.AddressContainer>
      <S.ImageContainer />
    </Page>
  );
};

export { Address };

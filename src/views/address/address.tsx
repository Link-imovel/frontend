import React from 'react';

import { Page } from '@components/container/page';
import { Button } from '@components/generics/button';
import { Input } from '@components/generics/input';
import { BreadCrumb } from '@components/generics/breadcrumb';

import { Logo } from '@components/generics/icons/logo';
import { ArrowBefore } from '@components/generics/icons/arrowbefore';
import { ArrowAfter } from '@components/generics/icons/arrowafter';

import * as S from './address.style';
import { AddressViewProps } from './address.type';
import { colors } from '@theme/theme/default';
import { Formatters } from '@helpers/formatters';

const Address = ({
  title,
  buttons,
  breadCrumb,
  handleData,
  handleValidation,
  valid,
  data,
}: AddressViewProps): React.ReactElement => {
  return (
    <Page>
      <S.Container>
        <S.FormContent>
          <Button
            variant="transparent"
            size="xsmall"
            radius="square"
            icon={<Logo fill={colors.blackGrey} />}
            onClick={buttons.BLogo.callback}
          />
          <BreadCrumb paths={breadCrumb.paths} />
          <S.NavigationWrapper>
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
              onClick={buttons.BArrowAfter.callback}
            />
          </S.NavigationWrapper>
          <S.Title>{title}</S.Title>
          <S.Content>
            <S.Wrapper column="A">
              <Input
                id="street"
                label="Endereço"
                type="text"
                name="street"
                placeholder="Informe o endereço"
                onChange={(el) => handleData(el.target.id, el.target.value)}
                onValidation={({ valid }) => handleValidation('street', valid)}
                value={data.street}
                validators={[
                  {
                    type: 'Required',
                    message: 'Campo é requerido',
                  },
                  {
                    type: 'NotBlank',
                    message: 'O campo não pode estar em branco.',
                  },
                  {
                    type: 'OnlyLetters',
                    message: 'Digite somente letras.',
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
                value={data.street2}
              />
              <Input
                id="number"
                label="Numero"
                type="text"
                name="number"
                placeholder="Informe o numero"
                onChange={(el) => handleData(el.target.id, el.target.value)}
                onValidation={({ valid }) => handleValidation('number', valid)}
                value={data.number}
                validators={[
                  {
                    type: 'Required',
                    message: 'Campo é requerido',
                  },
                  {
                    type: 'NotBlank',
                    message: 'O campo não pode estar em branco.',
                  },
                  {
                    type: 'OnlyNumbers',
                    message: 'Favor inserir somente números',
                  },
                ]}
              />
              <Input
                id="neighborhood"
                label="Bairro"
                type="text"
                name="neighborhood"
                placeholder="Informe a aproximidade"
                onChange={(el) => handleData(el.target.id, el.target.value)}
                onValidation={({ valid }) =>
                  handleValidation('neighborhood', valid)
                }
                value={data.neighborhood}
                validators={[
                  {
                    type: 'Required',
                    message: 'Campo é requerido',
                  },
                  {
                    type: 'NotBlank',
                    message: 'O campo não pode estar em branco.',
                  },
                ]}
              />
            </S.Wrapper>
            <S.Wrapper column="B">
              <Input
                id="city"
                label="Cidade"
                type="text"
                name="city"
                placeholder="Informe a Cidade"
                onChange={(el) => handleData(el.target.id, el.target.value)}
                onValidation={({ valid }) => handleValidation('city', valid)}
                value={data.city}
                validators={[
                  {
                    type: 'Required',
                    message: 'Campo é requerido',
                  },
                  {
                    type: 'NotBlank',
                    message: 'O campo não pode estar em branco.',
                  },
                  {
                    type: 'OnlyLetters',
                    message: 'Digite somente letras.',
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
                onValidation={({ valid }) => handleValidation('state', valid)}
                value={data.state}
                validators={[
                  {
                    type: 'Required',
                    message: 'Campo é requerido',
                  },
                  {
                    type: 'NotBlank',
                    message: 'O campo não pode estar em branco.',
                  },
                  {
                    type: 'OnlyLetters',
                    message: 'Digite somente letras.',
                  },
                ]}
              />
              <Input
                id="zip"
                label="CEP"
                type="text"
                name="zip"
                placeholder="Informe o CEP"
                maxLength={9}
                onChange={(el) =>
                  handleData(
                    el.target.id,
                    Formatters.formatZipCode(el.target.value)
                  )
                }
                onValidation={({ valid }) => handleValidation('zip', valid)}
                value={data.zip}
                validators={[
                  {
                    type: 'Required',
                    message: 'Campo é requerido',
                  },
                  {
                    type: 'NotBlank',
                    message: 'O campo não pode estar em branco.',
                  },
                ]}
              />
            </S.Wrapper>
            <Button
              variant="primary"
              label={buttons.BNext.label}
              size="large"
              radius="square"
              onClick={buttons.BNext.callback}
              disabled={!valid}
            />
          </S.Content>
        </S.FormContent>
        <S.ImageContent />
      </S.Container>
    </Page>
  );
};

export { Address };

import React from 'react';

import { Page } from '@components/container/page';
import { Button } from '@components/generics/button';
import { Input } from '@components/generics/input';
import { BreadCrumb } from '@components/generics/breadcrumb';
import { Dropdown } from '@components/generics/dropdown';

import { ArrowBefore } from '@components/generics/icons/arrowbefore';
import { Logo } from '@components/generics/icons/logo';

import * as S from './client.style';
import { colors } from '@theme/theme/default';
import { ClientViewProps } from '@views/client/client.type';
import { Formatters } from '@helpers/formatters';

const Client = ({
  title,
  buttons,
  breadCrumb,
  handleData,
  handleValidation,
  valid,
  data,
  options,
}: ClientViewProps): React.ReactElement => {
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
          <S.Title>{title}</S.Title>
          <S.Content>
            <S.Wrapper column="A">
              <Dropdown
                label="Cliente"
                placeholder="Escolha um cliente"
                options={options}
              />
              <Input
                id="firstName"
                label="Nome"
                type="text"
                name="firstName"
                placeholder="Informe o nome"
                onChange={(el) => handleData(el.target.id, el.target.value)}
                onValidation={({ valid }) =>
                  handleValidation('firstName', valid)
                }
                value={data.firstName}
                validators={[
                  {
                    type: 'Required',
                    message: 'O campo é requerido',
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
                id="lastName"
                label="Sobrenome"
                type="text"
                name="lastName"
                placeholder="Informe o sobrenome"
                onChange={(el) => handleData(el.target.id, el.target.value)}
                onValidation={({ valid }) =>
                  handleValidation('lastName', valid)
                }
                value={data.lastName}
                validators={[
                  {
                    type: 'Required',
                    message: 'O campo é requerido',
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
                id="email"
                label="E-mail"
                type="text"
                name="email"
                placeholder="Informe o e-mail"
                onChange={(el) => handleData(el.target.id, el.target.value)}
                onValidation={({ valid }) => handleValidation('email', valid)}
                value={data.email}
                validators={[
                  {
                    type: 'Required',
                    message: 'O campo é requerido',
                  },
                  {
                    type: 'NotBlank',
                    message: 'O campo não pode estar em branco.',
                  },
                  {
                    type: 'Match',
                    message:
                      'Por favor, provenha um endereço de e-mail valido.',
                    match: (value) => {
                      return (
                        !value ||
                        !!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                          value as string
                        )
                      );
                    },
                  },
                ]}
              />
            </S.Wrapper>
            <S.Wrapper column="B">
              <Input
                id="phone"
                label="Telefone Residencial"
                type="text"
                name="phone"
                maxLength={14}
                value={data.phone}
                placeholder="Informe o telefone residencial"
                onChange={(el) =>
                  handleData(
                    el.target.id,
                    Formatters.formatPhone(el.target.value)
                  )
                }
                onValidation={({ valid }) => handleValidation('phone', valid)}
                validators={[
                  {
                    type: 'Required',
                    message: 'O campo é requerido',
                  },
                  {
                    type: 'NotBlank',
                    message: 'O campo não pode estar em branco.',
                  },
                  {
                    type: 'Match',
                    message: 'Por favor, provenha um telefone valido.',
                    match: (value) => {
                      return (
                        !value ||
                        !!/^(?:(?:\+|00)?(55)\s?)?(?:(?:\(?[1-9][0-9]\)?)?\s?)?(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$/.test(
                          value as string
                        )
                      );
                    },
                  },
                ]}
              />
              <Input
                id="mobile"
                label="Mobile"
                type="text"
                name="mobile"
                value={data.mobile}
                placeholder="Informe o telefone pessoal"
                maxLength={15}
                onChange={(el) =>
                  handleData(
                    el.target.id,
                    Formatters.formatPhone(el.target.value)
                  )
                }
                onValidation={({ valid }) => handleValidation('mobile', valid)}
                validators={[
                  {
                    type: 'Required',
                    message: 'O campo é requerido',
                  },
                  {
                    type: 'NotBlank',
                    message: 'O campo não pode estar em branco.',
                  },
                  {
                    type: 'Match',
                    message: 'Por favor, provenha um telefone valido.',
                    match: (value) => {
                      return (
                        !value ||
                        !!/^(?:(?:\+|00)?(55)\s?)?(?:(?:\(?[1-9][0-9]\)?)?\s?)?(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$/.test(
                          value as string
                        )
                      );
                    },
                  },
                ]}
              />
              <Input
                id="registry"
                label="CPF/CNPJ"
                type="text"
                name="registry"
                value={data.registry}
                placeholder="Informe o CPF/CNPJ"
                onChange={(el) =>
                  handleData(
                    el.target.id,
                    Formatters.formatRegistry(el.target.value)
                  )
                }
                onValidation={({ valid }) =>
                  handleValidation('registry', valid)
                }
                maxLength={18}
                validators={[
                  {
                    type: 'Required',
                    message: 'O campo é requerido',
                  },
                  {
                    type: 'NotBlank',
                    message: 'O campo não pode estar em branco.',
                  },
                  {
                    type: 'Match',
                    message: 'Por favor provenha um CNPJ/CPF valido.',
                    match: (value) => {
                      return (
                        !value ||
                        !!/(^\d{3}\.\d{3}\.\d{3}\-\d{2}$)|(^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$)/.test(
                          value as string
                        )
                      );
                    },
                  },
                ]}
              />
            </S.Wrapper>
            <Button
              variant="primary"
              label={buttons.BCreate.label}
              size="large"
              radius="square"
              onClick={buttons.BCreate.callback}
              disabled={!valid}
            />
          </S.Content>
        </S.FormContent>
        <S.ImageContent />
      </S.Container>
    </Page>
  );
};

export { Client };

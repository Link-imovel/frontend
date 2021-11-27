import React from 'react';

import { Page } from '@components/container/page';
import { Button } from '@components/generics/button';
import { Input } from '@components/generics/input';
import { DatePickerInput } from '@components/generics/datepicker';

import { UserViewProps } from './user.type';
import { Logo } from '@components/generics/icons/logo';
import { ArrowBefore } from '@components/generics/icons/arrowbefore';

import * as S from './user.styles';
import { colors } from '@theme/theme/default';

import { Formatters } from '@helpers/formatters';

const User = ({
  title,
  buttons,
  handleData,
  handleValidation,
  data,
  valid,
}: UserViewProps): React.ReactElement => {
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
                value={data.lastName}
                placeholder="Informe o sobrenome"
                onChange={(el) => handleData(el.target.id, el.target.value)}
                onValidation={({ valid }) =>
                  handleValidation('lastName', valid)
                }
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
                value={data.email}
                placeholder="Informe o e-mail"
                onChange={(el) => handleData(el.target.id, el.target.value)}
                onValidation={({ valid }) => handleValidation('email', valid)}
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
              <Input
                id="password"
                label="Senha"
                type="password"
                name="password"
                value={data.password}
                placeholder="Informe a senha"
                onChange={(el) => handleData(el.target.id, el.target.value)}
                onValidation={({ valid }) =>
                  handleValidation('password', valid)
                }
                validators={[
                  {
                    type: 'Required',
                    message: 'O campo é requerido',
                  },
                  {
                    type: 'NotBlank',
                    message: 'O campo não pode estar em branco.',
                  },
                ]}
              />
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
            </S.Wrapper>
            <S.Wrapper column="B">
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
                id="creci"
                label="CRECI"
                type="text"
                name="creci"
                value={data.creci}
                placeholder="Informe o CRECI"
                onChange={(el) => handleData(el.target.id, el.target.value)}
                onValidation={({ valid }) => handleValidation('creci', valid)}
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
                    type: 'OnlyNumbers',
                    message: 'Favor inserir somente números',
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
              <DatePickerInput
                selectedDate={new Date()
                  .toLocaleDateString('en-US')
                  .replace(/[/]/g, '-')}
                label="Data do Aniversario"
                name="birthday"
                handleValue={(value) => handleData('birthday', value)}
                validators={[
                  {
                    type: 'NotBlank',
                    message: 'A data não pode estar em branco.',
                  },
                  {
                    type: 'Required',
                    message: 'A data é necessário.',
                  },
                  {
                    type: 'Match',
                    message: 'Por favor digite uma data de nascimento válida.',
                    match: (value) => {
                      return (
                        !value ||
                        !!(value as string).match(
                          /^[0-9]{2}([/]|[-])[0-9]{2}([/]|[-])[0-9]{4}$/
                        )
                      );
                    },
                  },
                ]}
                onValidation={({ valid }) =>
                  handleValidation('birthday', valid)
                }
              />
            </S.Wrapper>
            <Button
              variant="primary"
              size="large"
              radius="square"
              onClick={buttons.BLogo.callback}
              disabled={!valid}
            />
          </S.Content>
        </S.FormContent>
        <S.ImageContent />
      </S.Container>
    </Page>
  );
};

export { User };

import React from 'react';

import { Page } from '@components/container/page';
import { Button } from '@components/generics/button';
import { Input } from '@components/generics/input';
import { BreadCrumb } from '@components/generics/breadcrumb';
import { Dropdown } from '@components/generics/dropdown';
import { DatePickerInput } from '@components/generics/datepicker';

import * as S from './client.style';
import { ClientProps } from './client.type';
import { Logo } from '@components/generics/icons/logo';
import { colors } from '@theme/theme/default';
import { ArrowBefore } from '@components/generics/icons/arrowbefore';

const Client = ({
  title,
  buttons,
  breadCrumb,
  handleData,
}: Required<ClientProps>): React.ReactElement => {
  return (
    <Page>
      <S.ClientContainer>
        <S.ClientWrapper>
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
          <S.ClientTitle>{title}</S.ClientTitle>
          <S.InputWrapper>
            <S.InputsColumnOne>
              <Dropdown label="Escolha um cliente" />
              <Input
                id="firstName"
                label="Nome"
                type="text"
                name="firstName"
                placeholder="Informe o nome"
                onChange={(el) => handleData(el.target.id, el.target.value)}
                validators={[
                  {
                    type: 'Required',
                    message: 'Campo é requerido',
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
                validators={[
                  {
                    type: 'Required',
                    message: 'Campo é requerido',
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
                validators={[
                  {
                    type: 'Required',
                    message: 'Campo é requerido',
                  },
                  {
                    type: 'Match',
                    message:
                      'Por favor, provenha um endereço de e-mail valido.',
                    match: (value) => {
                      const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                      return !value || !!regex.test(value as string);
                    },
                  },
                ]}
              />
              <Input
                id="password"
                label="Senha"
                type="password"
                name="password"
                placeholder="Informe a senha"
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
                id="phone"
                label="Telefone Residencial"
                type="text"
                name="phone"
                placeholder="Informe o telefone residencial"
                onChange={(el) => handleData(el.target.id, el.target.value)}
                validators={[
                  {
                    type: 'Required',
                    message: 'Campo é requerido',
                  },
                ]}
              />
              <Input
                id="mobile"
                label="Mobile"
                type="text"
                name="mobile"
                placeholder="Informe o telefone pessoal"
                onChange={(el) => handleData(el.target.id, el.target.value)}
                validators={[
                  {
                    type: 'Required',
                    message: 'Campo é requerido',
                  },
                ]}
              />
              <Input
                id="creci"
                label="CRECI"
                type="text"
                name="creci"
                placeholder="Informe o CRECI"
                onChange={(el) => handleData(el.target.id, el.target.value)}
                validators={[
                  {
                    type: 'Required',
                    message: 'Campo é requerido',
                  },
                ]}
              />
              <Input
                id="registry"
                label="CPF/CNPJ"
                type="text"
                name="registry"
                placeholder="Informe o CPF/CNPJ"
                onChange={(el) => handleData(el.target.id, el.target.value)}
                validators={[
                  {
                    type: 'Required',
                    message: 'Campo é requerido',
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
                onValidation={(status) => console.log(status)}
              />
            </S.InputsColumnTwo>
          </S.InputWrapper>
          <Button
            variant="primary"
            label={buttons.BGeneric.label}
            size="large"
            radius="square"
            onClick={buttons.BGeneric.callback}
          />
        </S.ClientWrapper>
      </S.ClientContainer>
      <S.ImageContainer />
    </Page>
  );
};

export { Client };

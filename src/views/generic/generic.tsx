import React from 'react';

import { Page } from '@components/container/page';
import { Button } from '@components/generics/button';
import { Input } from '@components/generics/input';
import { DatePickerInput } from '@components/generics/datepicker';

import * as S from './generic.styles';
import { colors } from '@theme/theme/default';
import { GenericProps } from './generic.type';

const Generic = ({ title, buttons }: GenericProps): React.ReactElement => {
  return (
    <Page>
      <S.GenericContainer>
        <S.GenericWrapper>
          <Button
            variant="transparent"
            size="xsmall"
            radius="square"
            icon={buttons.BLogo.icon}
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
            icon={buttons.BArrowBefore.icon}
            onClick={buttons.BArrowBefore.callback}
          />
          <S.GenericTitle>{title}</S.GenericTitle>
          <S.InputWrapper>
            <S.InputsColumnOne>
              <Input
                id="firstName"
                label="Nome"
                type="text"
                name="firstName"
                placeholder="Informe o nome"
                validateOnChange={false}
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
                validateOnChange={false}
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
                validateOnChange={false}
                validators={[
                  {
                    type: 'Required',
                    message: 'Campo é requerido',
                  },
                ]}
              />
              <Input
                id="phone"
                label="Telefone Residencial"
                type="text"
                name="phone"
                placeholder="Informe o telefone residencial"
                validateOnChange={false}
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
                id="mobile"
                label="Mobile"
                type="text"
                name="mobile"
                placeholder="Informe o telefone pessoal"
                validateOnChange={false}
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
                validateOnChange={false}
                validators={[
                  {
                    type: 'Required',
                    message: 'Campo é requerido',
                  },
                ]}
              />
              <Input
                id="cpfOrCnpj"
                label="CPF/CNPJ"
                type="text"
                name="cpfOrCnpj"
                placeholder="Informe o CPF/CNPJ"
                validateOnChange={false}
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
                onValidation={(status) =>
                  console.log('Validation status: ', status)
                }
              />
            </S.InputsColumnTwo>
          </S.InputWrapper>
          <Button
            variant="primary"
            label={buttons.BLogin.label}
            size="large"
            radius="square"
            onClick={buttons.BLogin.callback}
          />
        </S.GenericWrapper>
      </S.GenericContainer>
      <S.ImageContainer />
    </Page>
  );
};

export { Generic };

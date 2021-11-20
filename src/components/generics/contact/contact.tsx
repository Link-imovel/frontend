import React from 'react';

import { Input } from '@components/generics/input';
import { TextArea } from '@components/generics/textarea';
import { Button } from '@components/generics/button';
import { WhatsApp } from '@components/generics/icons/whatsapp';

import * as S from './contact.styles';
import { colors } from '@theme/theme/default';
import { ContactProps } from './contact.type';
import { Formatters } from '@helpers/formatters';

const Contact = ({
  handleData,
}: Required<ContactProps>): React.ReactElement => {
  const sendMessage = () => {
    console.log(2);
  };

  const sendMessageWhatsApp = () => {
    console.log(1);
  };

  return (
    <S.Container>
      <S.Title>Entre em contato para mais informações</S.Title>
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
            message: 'O campo é requerido',
          },
          {
            type: 'NotBlank',
            message: 'O campo não pode estar em branco.',
          },
          {
            type: 'Match',
            message: 'Por favor, provenha um endereço de e-mail valido.',
            match: (value) => {
              const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
              return !value || !!regex.test(value as string);
            },
          },
        ]}
      />
      <Input
        id="name"
        label="Nome completo"
        type="text"
        name="name"
        placeholder="Informe o nome completo"
        onChange={(el) => handleData(el.target.id, el.target.value)}
        validators={[
          {
            type: 'Required',
            message: 'Campo é requerido',
          },
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
        id="mobile"
        label="Mobile"
        type="text"
        name="mobile"
        placeholder="Informe o telefone pessoal"
        maxLength={15}
        onChange={(el) =>
          handleData(el.target.id, Formatters.formatPhone(el.target.value))
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
      <TextArea
        withBorder={true}
        placeholder="Digite uma Messagem"
        onChange={(el) => handleData(el.target.id, el.target.value)}
      />
      <S.Wrapper>
        <Button
          variant="primary"
          label="Contatar"
          size="large"
          onClick={sendMessage}
        />
      </S.Wrapper>
      <S.Wrapper>
        <Button
          variant="primary"
          label="Contato por whatsapp"
          size="large"
          background={colors.green}
          icon={<WhatsApp height={20} width={20} fill={colors.whiteGrey} />}
          iconReverse={true}
          onClick={sendMessageWhatsApp}
        />
      </S.Wrapper>
    </S.Container>
  );
};

export { Contact };

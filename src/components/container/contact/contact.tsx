import React from 'react';

import { Input } from '@components/generics/input';
import { TextArea } from '@components/generics/textarea';
import { Button } from '@components/generics/button';
import { WhatsApp } from '@components/generics/icons/whatsapp';

import * as S from './contact.styles';
import { colors } from '@theme/theme/default';
import { ContactProps } from './contact.type';

const Contact = ({
  handleData,
}: Required<ContactProps>): React.ReactElement => {
  const sendMessage = () => {
    console.log('#2');
  };

  const sendMessageWhatsApp = () => {
    console.log('#1');
  };

  return (
    <S.ContactContainer>
      <S.ContactTitle>Entre em contato para mais informações</S.ContactTitle>
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
            message: 'Por favor, provenha um endereço de e-mail valido.',
            match: (value) => {
              const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
              return !value || !!regex.test(value as string);
            },
          },
        ]}
      />
      <Input
        id="completeName"
        label="Nome completo"
        type="text"
        name="completeName"
        placeholder="Informe o nome completo"
        onChange={(el) => handleData(el.target.id, el.target.value)}
        validators={[
          {
            type: 'Required',
            message: 'Campo é requerido',
          },
        ]}
      />
      <Input
        id="telephone"
        label="Telefone"
        type="text"
        name="telephone"
        placeholder="Informe o telefone pessoal"
        onChange={(el) => handleData(el.target.id, el.target.value)}
        validators={[
          {
            type: 'Required',
            message: 'Campo é requerido',
          },
        ]}
      />
      <TextArea
        withBorder={true}
        placeholder="Digite uma Messagem"
        onChange={(el) => handleData(el.target.id, el.target.value)}
      />
      <Button
        variant="primary"
        label="Contatar"
        size="large"
        onClick={sendMessage}
      />
      <Button
        variant="primary"
        label="Contato por whatsapp"
        size="large"
        background={colors.green}
        icon={<WhatsApp height={20} width={20} fill={colors.whiteGrey} />}
        iconReverse={true}
        onClick={sendMessageWhatsApp}
      />
    </S.ContactContainer>
  );
};

export { Contact };

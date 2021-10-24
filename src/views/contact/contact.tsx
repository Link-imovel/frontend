import React from 'react';

import { Page } from '@components/container/page';
import { Button } from '@components/generics/button';
import { Input } from '@components/generics/input';
import { colors } from '@theme/theme/default';
import { TextArea } from '@components/generics/textarea';

import * as S from './contact.styles';
import { ContactProps } from './contact.type';

const ContactView = ({ title, buttons }: ContactProps): React.ReactElement => {
  return (
    <Page>
      <S.ContactContainer>
        <S.ContactWrapper>
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
          <S.ContactTitle>{title}</S.ContactTitle>
          <S.InputWrapper>
            <Input
              id="email"
              label="E-mail"
              type="text"
              name="email"
              placeholder="Entre com o seu e-mail"
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
            <TextArea withBorder={true} placeholder="Digite uma Messagem" />
          </S.InputWrapper>
          <Button
            variant="primary"
            label={buttons.BLogin.label}
            size="large"
            radius="square"
            onClick={buttons.BLogin.callback}
          />
        </S.ContactWrapper>
      </S.ContactContainer>
      <S.ImageContainer />
    </Page>
  );
};

export { ContactView };

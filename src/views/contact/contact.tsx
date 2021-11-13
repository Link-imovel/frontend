import React from 'react';

import { Page } from '@components/container/page';
import { Button } from '@components/generics/button';
import { Input } from '@components/generics/input';
import { TextArea } from '@components/generics/textarea';

import { Logo } from '@components/generics/icons/logo';
import { ArrowBefore } from '@components/generics/icons/arrowbefore';

import * as S from './contact.styles';
import { ContactProps } from './contact.type';
import { colors } from '@theme/theme/default';

const ContactView = ({ title, buttons }: ContactProps): React.ReactElement => {
  return (
    <Page>
      <S.Container>
        <S.ContactContent>
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
          <S.Wrapper>
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
          </S.Wrapper>
          <Button
            variant="primary"
            label={buttons.BSend.label}
            size="large"
            radius="square"
            onClick={buttons.BSend.callback}
          />
        </S.ContactContent>
        <S.ImageContent />
      </S.Container>
    </Page>
  );
};

export { ContactView };

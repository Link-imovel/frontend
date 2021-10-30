import React from 'react';
import Link from 'next/link';

import { Page } from '@components/container/page';
import { Button } from '@components/generics/button';
import { Input } from '@components/generics/input';

import * as S from './login.style';
import { LoginProps } from './login.type';
import { colors } from '@theme/theme/default';

const Login = ({ title, subtitle, buttons }: LoginProps): JSX.Element => {
  return (
    <Page>
      <S.LoginContainer>
        <S.LoginWrapper>
          <Button
            variant="transparent"
            size="xsmall"
            radius="square"
            icon={buttons.BLogo.icon}
            onClick={buttons.BLogo.callback}
          />
          <S.LoginTitle>{title}</S.LoginTitle>
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
          <S.LoginSubtitle>{subtitle}</S.LoginSubtitle>
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
            <S.LinkContainer>
              <Link href="/">
                <a>Esqueceu a senha ?</a>
              </Link>
            </S.LinkContainer>
            <Input
              id="password"
              label="Senha"
              type="password"
              name="password"
              placeholder="Entre com a sua senha"
              validateOnChange={false}
              validators={[
                {
                  type: 'Required',
                  message: 'Campo é requerido',
                },
              ]}
            />
          </S.InputWrapper>
          <Button
            variant="primary"
            label={buttons.BLogin.label}
            size="large"
            radius="square"
            onClick={buttons.BLogin.callback}
          />
          <S.LinkContainer reverse={true}>
            <Link href="/">
              <a>
                Não tem conta ainda? <span>Entre contato</span>
              </a>
            </Link>
          </S.LinkContainer>
        </S.LoginWrapper>
      </S.LoginContainer>
      <S.ImageContainer />
    </Page>
  );
};

export { Login };

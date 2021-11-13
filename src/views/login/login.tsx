import React from 'react';
import Link from 'next/link';

import { Page } from '@components/container/page';
import { Button } from '@components/generics/button';
import { Input } from '@components/generics/input';

import { Logo } from '@components/generics/icons/logo';
import { ArrowBefore } from '@components/generics/icons/arrowbefore';

import * as S from './login.style';
import { LoginProps } from './login.type';
import { colors } from '@theme/theme/default';

const Login = ({ title, subtitle, buttons }: LoginProps): JSX.Element => {
  return (
    <Page>
      <S.Container>
        <S.LoginContent>
          <Button
            variant="transparent"
            size="xsmall"
            radius="square"
            icon={<Logo fill={colors.blackGrey} />}
            onClick={buttons.BLogo.callback}
          />
          <S.Title>{title}</S.Title>
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
          <S.Subtitle>{subtitle}</S.Subtitle>
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
            <S.LinkWrapper>
              <Link href="/">
                <a>Esqueceu a senha ?</a>
              </Link>
            </S.LinkWrapper>
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
            <Button
              variant="primary"
              label={buttons.BLogin.label}
              size="large"
              radius="square"
              onClick={buttons.BLogin.callback}
            />
          </S.Wrapper>
          <S.LinkWrapper reverse={true}>
            <Link href="/">
              <a>
                Não tem conta ainda? <span>Entre contato</span>
              </a>
            </Link>
          </S.LinkWrapper>
        </S.LoginContent>
        <S.ImageContent />
      </S.Container>
    </Page>
  );
};

export { Login };

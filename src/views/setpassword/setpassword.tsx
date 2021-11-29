import React from 'react';

import { Page } from '@components/container/page';
import { Button } from '@components/generics/button';
import { Input } from '@components/generics/input';

import { Logo } from '@components/generics/icons/logo';
import { ArrowBefore } from '@components/generics/icons/arrowbefore';

import * as S from './setpassword.style';
import { colors } from '@theme/theme/default';
import { SetPasswordViewPros } from './setpassword.type';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SetPassword = ({
  buttons,
  title,
  handleData,
  handleValidation,
  valid,
  data,
}: SetPasswordViewPros): React.ReactElement => {
  return (
    <Page>
      <ToastContainer autoClose={2000} />
      <S.Container>
        <S.Wrapper>
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
          <Input
            id="newPassword"
            label="Nova senha"
            type="password"
            name="newPassword"
            placeholder="Informe a nova senha"
            validateOnChange={false}
            onChange={(el) => handleData(el.target.id, el.target.value)}
            onValidation={({ valid }) => handleValidation('newPassword', valid)}
            value={data.newPassword}
            validators={[
              {
                type: 'Required',
                message: 'Campo é requerido',
              },
              {
                type: 'NotBlank',
                message: 'O campo não pode estar em branco.',
              },
            ]}
          />
          <Input
            id="samePassword"
            label="Confirma senha"
            type="password"
            name="samePassword"
            placeholder="Informe novamente a senha"
            validateOnChange={false}
            onChange={(el) => handleData(el.target.id, el.target.value)}
            onValidation={({ valid }) =>
              handleValidation('samePassword', valid)
            }
            value={data.samePassword}
            validators={[
              {
                type: 'Required',
                message: 'Campo é requerido',
              },
              {
                type: 'NotBlank',
                message: 'O campo não pode estar em branco.',
              },
            ]}
          />
          <Button
            variant="primary"
            label={buttons.BConfirm.label}
            size="large"
            radius="square"
            onClick={buttons.BConfirm.callback}
            disabled={!valid}
          />
        </S.Wrapper>
      </S.Container>
    </Page>
  );
};

export { SetPassword };

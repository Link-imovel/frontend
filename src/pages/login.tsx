import React from 'react';

import LoginContainer from '@containers/login';

import { ButtonsProps } from '@views/login/login.type';

import { Logo } from '@components/generics/icons/logo';
import { ArrowBefore } from '@components/generics/icons/arrowbefore';

import { colors } from '@theme/theme/default';

const Login = (): React.ReactElement => {
  const buttons: ButtonsProps = {
    BLogo: {
      icon: <Logo fill={colors.blackGrey} />,
    },
    BArrowBefore: {
      icon: <ArrowBefore height={20} width={20} />,
      label: 'Anterior',
    },
    BLogin: {
      label: 'Entrar',
    },
  };

  return (
    <LoginContainer
      title="Seja bem-vindo(a)"
      subtitle="Faça login para continuar"
      buttons={buttons}
    />
  );
};

export default Login;

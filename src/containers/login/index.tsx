import React from 'react';

import { LoginView } from '@views/login';

import { LoginProps } from '@views/login/login.type';

const LoginContainer = (props: LoginProps) => {
  const customProps = { ...props };
  const { BLogo, BArrowBefore, BLogin } = customProps.buttons;

  BLogo.callback = React.useCallback(() => {
    console.log('#1');
  }, []);

  BArrowBefore.callback = React.useCallback(() => {
    console.log('#2');
  }, []);

  BLogin.callback = React.useCallback(() => {
    console.log('#3');
  }, []);

  return <LoginView {...customProps} />;
};

export default LoginContainer;

import React from 'react';

import { Login } from '@views/login';

import { LoginProps } from '@views/login/login.type';

const LoginContainer = (props: LoginProps) => {
  const customProps = { ...props };
  const { BLogo, BArrowBefore, BLogin } = customProps.buttons;

  BLogo.callback = () => {
    console.log('#1');
  };

  BArrowBefore.callback = () => {
    console.log('#2');
  };

  BLogin.callback = () => {
    console.log('#3');
  };

  return <Login {...customProps} />;
};

export default LoginContainer;

import React from 'react';
import { useRouter } from 'next/router';

import { Login } from '@views/login';

import { LoginProps } from '@views/login/login.type';

const LoginContainer = (props: LoginProps) => {
  const { BLogo, BArrowBefore, BLogin } = props.buttons;

  const router = useRouter();

  BLogo.callback = () => {
    router.push('/');
  };

  BArrowBefore.callback = () => {
    router.push('/');
  };

  BLogin.callback = () => {
    router.push('/list/announcements');
  };

  return <Login {...props} />;
};

export default LoginContainer;

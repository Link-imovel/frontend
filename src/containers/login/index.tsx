import React from 'react';
import { useRouter } from 'next/router';

import { Login } from '@views/login';
import { LoginProps } from '@views/login/login.type';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, RootState } from '@store/index';

const LoginContainer = (props: LoginProps) => {
  const router = useRouter();
  const customProps = { ...props };
  const { BLogo, BArrowBefore, BLogin } = customProps.buttons;

  const userStore = useSelector((state: RootState) => state.user);
  const store = useSelector((state: RootState) => state.store.login);

  const [data, setData] = React.useState(store.user);
  const [dataValid, setDataValid] = React.useState(store.valid);
  const [formValid, setFormValid] = React.useState(
    Object.values(dataValid).every((item) => item)
  );

  const dispatch = useDispatch<Dispatch>();

  BLogo.callback = () => {
    router.push('/');
  };

  BArrowBefore.callback = () => {
    router.push('/');
  };

  BLogin.callback = () => {
    dispatch.user.login({
      email: data.email,
      password: data.password,
    });
  };

  React.useEffect(() => {
    if (userStore.access_token) router.push('/');
  }, [router, userStore.access_token]);

  const handleData = (fieldName: string, value: any) => {
    setData({ ...data, [fieldName]: value });
    dispatch.store.login({
      user: {
        ...data,
        [fieldName]: value,
      },
    });
  };

  const handleValidation = (fieldName: string, value: boolean) => {
    const valid = { ...dataValid, [fieldName]: value };
    setDataValid(valid);
    dispatch.store.login({
      valid,
    });
    setFormValid(Object.values(valid).every((item) => item));
  };

  return (
    <Login
      valid={formValid}
      handleData={handleData}
      handleValidation={handleValidation}
      data={data}
      {...customProps}
    />
  );
};

export default LoginContainer;

import React from 'react';
import { useRouter } from 'next/router';

import { Login } from '@views/login';
import { LoginProps } from '@views/login/login.type';

import { useDispatch, useSelector } from 'react-redux';
import { actions as storeActions } from '@store/ducks/store';
import { actions as userActions } from '@store/ducks/user';
import { RootStore } from '@store/store.interface';

const LoginContainer = (props: LoginProps) => {
  const { BLogo, BArrowBefore, BLogin } = props.buttons;
  const router = useRouter();

  const store = useSelector((state: RootStore) => state.store.login);
  const userStore = useSelector((state: RootStore) => state.user);
  const dispatch = useDispatch();

  const [data, setData] = React.useState(store.user);
  const [dataValid, setDataValid] = React.useState(store.valid);
  const [formValid, setFormValid] = React.useState(
    Object.values(dataValid).every((item) => item)
  );

  BLogo.callback = () => {
    router.push('/');
  };

  BArrowBefore.callback = () => {
    router.push('/');
  };

  BLogin.callback = () => {
    dispatch(
      userActions.loginUserRequest({
        email: data.email,
        password: data.password,
      })
    );
  };

  React.useEffect(() => {
    if (userStore.access_token) router.push('/');
  }, [router, userStore.access_token]);

  const handleData = (fieldName: string, value: any) => {
    setData({ ...data, [fieldName]: value });
    dispatch(
      storeActions.login({
        user: {
          ...data,
          [fieldName]: value,
        },
      })
    );
  };

  const handleValidation = (fieldName: string, value: boolean) => {
    const valid = { ...dataValid, [fieldName]: value };
    setDataValid(valid);
    dispatch(
      storeActions.login({
        valid,
      })
    );
    setFormValid(Object.values(valid).every((item) => item));
  };

  return (
    <Login
      valid={formValid}
      handleData={handleData}
      handleValidation={handleValidation}
      data={data}
      {...props}
    />
  );
};

export default LoginContainer;

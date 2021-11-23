import React from 'react';
import { useRouter } from 'next/router';

import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, RootState } from '@store/index';

import { SetPassword } from '@views/setpassword/setpassword';
import { SetPasswordProps } from '@views/setpassword/setpassword.type';

const SetPasswordContainer = (props: SetPasswordProps): React.ReactElement => {
  const { BArrowBefore, BLogo, BConfirm } = props.buttons;
  const userStore = useSelector((state: RootState) => state.user);
  const store = useSelector(
    (state: RootState) => state.store.createSetPassword
  );

  const router = useRouter();

  const [data, setData] = React.useState(store.setpassword);
  const [dataValid, setDataValid] = React.useState(store.valid);
  const [formValid, setFormValid] = React.useState(
    Object.values(dataValid).every((item) => item)
  );

  const dispatch = useDispatch<Dispatch>();

  React.useEffect(() => {
    if (userStore.user?.id) router.push('/login');
  }, [router, userStore.user?.id]);

  BArrowBefore.callback = () => {
    router.push('/login');
  };

  BLogo.callback = () => {
    router.push('/');
  };

  BConfirm.callback = () => {
    dispatch.user.setPassword({
      token: props.token,
      password: data.newPassword,
      confirmPassword: data.samePassword,
    });
  };

  const handleData = (fieldName: string, value: any) => {
    setData({ ...data, [fieldName]: value });
    dispatch.store.createSetPassword({
      setpassword: {
        ...data,
        [fieldName]: value,
      },
    });
  };

  const handleValidation = (fieldName: string, value: boolean) => {
    const valid = { ...dataValid, [fieldName]: value };
    setDataValid(valid);
    dispatch.store.createSetPassword({
      valid,
    });
    setFormValid(Object.values(valid).every((item) => item));
  };

  return (
    <SetPassword
      valid={formValid}
      handleData={handleData}
      handleValidation={handleValidation}
      data={data}
      {...props}
    />
  );
};

export default SetPasswordContainer;

import React from 'react';
import { useRouter } from 'next/router';

import { SetPassword } from '@views/setpassword/setpassword';
import { SetPasswordProps } from '@views/setpassword/setpassword.type';

import { useDispatch, useSelector } from 'react-redux';
import { actions as storeActions } from '@store/ducks/store';
import { actions as userActions } from '@store/ducks/user';
import { RootStore } from '@store/store.interface';

const SetPasswordContainer = (props: SetPasswordProps): React.ReactElement => {
  const { BArrowBefore, BLogo, BConfirm } = props.buttons;
  const router = useRouter();

  const store = useSelector(
    (state: RootStore) => state.store.createSetPassword
  );
  const userStore = useSelector((state: RootStore) => state.user);
  const dispatch = useDispatch();

  const [data, setData] = React.useState(store.setpassword);
  const [dataValid, setDataValid] = React.useState(store.valid);
  const [formValid, setFormValid] = React.useState(
    Object.values(dataValid).every((item) => item)
  );

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
    dispatch(
      userActions.setUserPasswordRequest({
        token: props.token,
        password: data.newPassword,
        confirmPassword: data.samePassword,
      })
    );
  };

  const handleData = (fieldName: string, value: any) => {
    setData({ ...data, [fieldName]: value });
    dispatch(
      storeActions.createSetPassword({
        setpassword: {
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
      storeActions.createSetPassword({
        valid,
      })
    );
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

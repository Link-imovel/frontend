import React from 'react';
import { useRouter } from 'next/router';

import { useDispatch, useSelector } from 'react-redux';
import { actions as storeActions } from '@store/ducks/store';
import { actions as userActions } from '@store/ducks/user';
import { RootStore } from '@store/store.interface';

import { User as Users } from '@views/user';
import { UserProps } from '@views/user/user.type';
import { CreateUser, UserFields } from '@store/ducks/store/store.interface';

const UserContainer = (props: UserProps): React.ReactElement => {
  console.log(props);
  const { BLogo, BArrowBefore, BDefault } = props.buttons;
  const router = useRouter();

  const store = useSelector((state: RootStore) => state.store.createUser);
  const userStore = useSelector((state: RootStore) => state.user);
  const dispatch = useDispatch();

  const [data, setData] = React.useState<UserFields>(store.user);
  const [dataValid, setDataValid] = React.useState(store.valid);
  const [formValid, setFormValid] = React.useState(
    Object.values(dataValid).every((item) => item)
  );

  React.useEffect(() => {
    switch (props.type) {
      case 'create':
        setData(store.user);
        return;
      case 'update':
        setData(store.user);
        return;
      case 'update-profile':
        setData(userStore?.user as UserFields);
        return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  BLogo.callback = () => {
    router.push('/');
  };

  BArrowBefore.callback = () => {
    window.location.replace('/list/announcements');
  };

  BDefault.callback = () => {
    switch (props.type) {
      case 'update':
        if (userStore?.user?.id)
          dispatch(userActions.updateUserRequest(userStore?.user?.id, data));
        return;
      case 'create':
        dispatch(userActions.createUserRequest(data));
        return;
      case 'update-profile':
        if (userStore?.user?.id)
          dispatch(userActions.updateUserRequest(userStore?.user?.id, data));
        return;
    }
  };

  const handleData = (fieldName: string, value: any) => {
    setData({ ...data, [fieldName]: value } as UserFields);
    dispatch(
      storeActions.createUser({
        user: {
          ...data,
          [fieldName]: value,
        },
      } as CreateUser)
    );
  };

  const handleValidation = (fieldName: string, value: boolean) => {
    const valid = { ...dataValid, [fieldName]: value };
    setDataValid(valid);
    dispatch(
      storeActions.createUser({
        valid,
      })
    );
    setFormValid(Object.values(valid).every((item) => item));
  };

  return (
    <Users
      valid={formValid}
      handleData={handleData}
      handleValidation={handleValidation}
      data={data}
      {...props}
    />
  );
};

export default UserContainer;

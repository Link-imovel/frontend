import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, RootState } from '@store/index';

import { User as Users } from '@views/user';
import { UserProps } from '@views/user/user.type';

import { User } from '@store/models/user/user.interface';
import { useRouter } from 'next/router';

const UserContainer = (props: UserProps): React.ReactElement => {
  const { BLogo, BArrowBefore, BDefault } = props.buttons;
  const router = useRouter();
  const userStore = useSelector((state: RootState) => state.user);
  const store = useSelector((state: RootState) => state.store.createUser);

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
    window.location.replace('/list/announcements');
  };

  BDefault.callback = async () => {
    const user = ({ ...data, valid: undefined } as unknown) as User;
    switch (props.type) {
      case 'update':
        if (userStore.user.id)
          await dispatch.user.update({
            id: userStore.user.id,
            data: user,
          });
        break;
      case 'create':
        await dispatch.user.create(user);
        break;
      default:
        await dispatch.user.getAll();
    }
  };

  const handleData = (fieldName: string, value: any) => {
    setData({ ...data, [fieldName]: value });
    dispatch.store.createUser({
      user: {
        ...data,
        [fieldName]: value,
      },
    });
  };

  const handleValidation = (fieldName: string, value: boolean) => {
    const valid = { ...dataValid, [fieldName]: value };
    setDataValid(valid);
    dispatch.store.createUser({
      valid,
    });
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

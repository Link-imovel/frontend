import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Generic } from '@views/generic';

import { GenericProps } from '@views/generic/generic.type';
import { Dispatch, RootState } from '@store/index';
import { User } from '@store/models/user/user.interface';
import { UserFields } from '@store/models/store/store.interface';

const GenericContainer = (props: GenericProps): React.ReactElement => {
  const { BLogo, BArrowBefore, BLogin } = props.buttons;
  const userStore = useSelector((state: RootState) => state.user);
  const store = useSelector((state: RootState) => state.store);

  const dispatch = useDispatch<Dispatch>();

  BLogo.callback = () => {
    console.log(1);
  };

  BArrowBefore.callback = () => {
    console.log(2);
  };

  BLogin.callback = async () => {
    switch (props.type) {
      case 'update':
        if (userStore.user.id)
          await dispatch.user.update({
            id: userStore.user.id,
            data: data as User,
          });
        break;
      case 'create':
        await dispatch.user.create(data as User);
        break;
      default:
        await dispatch.user.getAll();
    }
  };

  const [data, setData] = React.useState({});

  const handleData = (fieldName: string, value: any) => {
    setData({ ...data, [fieldName]: value });
    dispatch.store.update({
      user: { ...data, [fieldName]: value } as UserFields,
    });
  };

  return <Generic handleData={handleData} store={store} {...props} />;
};

export default GenericContainer;

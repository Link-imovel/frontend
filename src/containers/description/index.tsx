import React from 'react';
import { useRouter } from 'next/router';

import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '@store/store.interface';

import { Description } from '@views/description';
import { DesciptionProps } from '@views/description/description.type';

const DescriptionContainer = (props: DesciptionProps): React.ReactElement => {
  const { BLogin, BLogo, BLogout } = props.buttons;
  const router = useRouter();

  const pubsStore = useSelector((state: RootStore) => state.publication);
  const userStore = useSelector((state: RootStore) => state.user);
  const dispatch = useDispatch();

  const [data, setData] = React.useState({});

  BLogo.callback = () => {
    router.push('/');
  };

  BLogin.callback = () => {
    router.push('/login');
  };

  BLogout.callback = () => {
    dispatch({});
  };

  const handleData = (fieldName: string, value: any) => {
    setData({ ...data, [fieldName]: value });
  };

  return (
    <Description
      {...props}
      handleData={handleData}
      user={userStore?.user?.firstName}
      isLogged={!!userStore?.user?.id}
      render={{ admin: true }}
      publication={pubsStore.publication}
    />
  );
};

export default DescriptionContainer;

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
  const [isLogged, setIsLogged] = React.useState<boolean>();

  React.useEffect(() => {
    setIsLogged(!!userStore?.user?.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  const permissionType = React.useCallback((): Record<string, any> => {
    return {
      admin: userStore?.user?.permission?.name === 'admin',
    };
  }, [userStore?.user?.permission?.name]);

  console.log('PUBSTORE >>', pubsStore?.publication);

  return (
    <Description
      {...props}
      handleData={handleData}
      user={userStore?.user?.firstName}
      isLogged={!!isLogged}
      permissionType={permissionType()}
      publication={pubsStore?.publication}
    />
  );
};

export default DescriptionContainer;

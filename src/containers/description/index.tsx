import React from 'react';
import { useRouter } from 'next/router';

import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, RootState } from '@store/index';

import { Description } from '@views/description';
import {
  DesciptionProps,
  PublicationPros,
} from '@views/description/description.type';

const DescriptionContainer = (props: DesciptionProps): React.ReactElement => {
  const { BLogin, BLogo, BLogout } = props.buttons;

  const pubsStore = useSelector((state: RootState) => state.publication);
  const userStore = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<Dispatch>();

  const router = useRouter();

  const [data, setData] = React.useState({});
  const [publication, setPublication] = React.useState<PublicationPros>(
    {} as PublicationPros
  );

  React.useEffect(() => {
    (async () => {
      await dispatch.publication.get(props?.id);

      setPublication({
        // it needs to remove object location
        data: pubsStore.publication,
        location: {
          latitude: 38.861,
          longitude: 71.2761,
        },
      });
    })();
  }, [
    dispatch.publication,
    dispatch.publication.get,
    props.id,
    pubsStore.publication,
  ]);

  BLogo.callback = () => {
    router.push('/');
  };

  BLogin.callback = () => {
    router.push('/login');
  };

  BLogout.callback = () => {
    dispatch.user.clear();
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
      publication={publication}
    />
  );
};

export default DescriptionContainer;

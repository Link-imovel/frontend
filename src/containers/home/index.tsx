import React from 'react';
import { useRouter } from 'next/router';

import { Home } from '@views/home';
import { HomeProps } from '@views/home/home.type';
import { CardProps } from '@components/generics/card/card.type';

import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '@store/store.interface';
import { actions as pubActions } from '@store/ducks/publications';
import { SearchBarFields } from '@store/ducks/store/store.interface';

const HomeContainer = (props: HomeProps): React.ReactElement => {
  const { BLogin, BLogo, BShowImovels, BLogout } = props.header.buttons;
  const router = useRouter();

  const userStore = useSelector((state: RootStore) => state.user);
  const pubsStore = useSelector((state: RootStore) => state.publication);
  const dispatch = useDispatch();

  const [data, setData] = React.useState<SearchBarFields>();

  const getLocation = React.useCallback((): Record<string, any> | null => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      return {
        latitude: coords.latitude,
        longitude: coords.longitude,
      };
    });
    return null;
  }, []);

  React.useEffect(() => {
    dispatch(pubActions.getPublicationsRequest(getLocation() || {}));
  }, [dispatch, getLocation]);

  BLogo.callback = () => {
    router.push('/');
  };

  BLogin.callback = () => {
    router.push('/login');
  };

  BLogout.callback = () => {
    dispatch({});
  };

  BShowImovels.callback = () => {
    window.location.replace('/list/announcements');
  };

  const handleData = (fieldName: string, value: any) => {
    setData({ ...data, [fieldName]: value } as SearchBarFields);
    dispatch({
      searchbar: {
        ...data,
        [fieldName]: value,
      },
    });
  };

  return (
    <Home
      userName={userStore.user?.firstName}
      isLogged={!!userStore.user?.id}
      cards={pubsStore.publications.map((publication) => ({
        variant: 'primary',
        size: 'small',
        views: false,
        functionalities: false,
        buttons: {
          googleMap: {
            size: 'small',
          },
          visualize: {
            size: 'medium',
          },
        },
        publication,
      }))}
      handleData={handleData}
      data={data}
      render={{ admin: true }}
      {...props}
    />
  );
};

export default HomeContainer;

import React from 'react';
import { useRouter } from 'next/router';

import { Home } from '@views/home';
import { HomeProps } from '@views/home/home.type';
import { CardProps } from '@components/generics/card/card.type';

import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '@store/store.interface';
import { SearchBarFields } from '@store/ducks/store/store.interface';

const HomeContainer = (props: HomeProps): React.ReactElement => {
  const { BLogin, BLogo, BShowImovels, BLogout } = props.header.buttons;
  const userStore = useSelector((state: RootStore) => state.user);
  const pubsStore = useSelector((state: RootStore) => state.publication);

  const dispatch = useDispatch();

  const [cards] = React.useState<CardProps[]>(
    pubsStore.publications.map((publication) => ({
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
    }))
  );

  const [data, setData] = React.useState<SearchBarFields>();

  const router = useRouter();

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
      userName={userStore?.user?.firstName}
      cards={cards}
      isLogged={!!userStore?.user?.id}
      {...props}
      handleData={handleData}
      data={data}
      render={{ admin: true }}
    />
  );
};

export default HomeContainer;

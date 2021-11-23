import React from 'react';
import { useRouter } from 'next/router';

import { Home } from '@views/home';
import { HomeProps } from '@views/home/home.type';
import { CardProps } from '@components/generics/card/card.type';

import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, RootState } from '@store/index';

const HomeContainer = (props: HomeProps): React.ReactElement => {
  const { BLogin, BLogo, BShowImovels } = props.header.buttons;
  // const userStore = useSelector((state: RootState) => state.user);
  const pubsStore = useSelector((state: RootState) => state.publication);
  const dispatch = useDispatch<Dispatch>();

  const [cards, setCards] = React.useState<CardProps[]>([]);
  const [data, setData] = React.useState({});

  React.useEffect(() => {
    (async () => {
      await dispatch.publication.getAll();
      // Need to adjust card component
      setCards(
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
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const router = useRouter();

  BLogo.callback = () => {
    router.push('/');
  };

  BLogin.callback = () => {
    router.push('/login');
  };

  BShowImovels.callback = () => {
    window.location.replace('/list/announcements');
  };

  const handleData = (fieldName: string, value: any) => {
    setData({ ...data, [fieldName]: value });
  };

  return (
    <Home
      userName="John"
      cards={cards}
      isLogged={false}
      {...props}
      handleData={handleData}
    />
  );
};

export default HomeContainer;

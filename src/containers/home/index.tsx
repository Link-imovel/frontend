import React from 'react';
import { useRouter } from 'next/router';

import { Home } from '@views/home';
import { HomeProps } from '@views/home/home.type';
import { CardProps } from '@components/generics/card/card.type';

import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, RootState } from '@store/index';

const HomeContainer = (props: HomeProps): React.ReactElement => {
  const { BLogin, BLogo, BShowImovels, BLogout } = props.header.buttons;
  const userStore = useSelector((state: RootState) => state.user);
  const pubsStore = useSelector((state: RootState) => state.publication);

  const store = useSelector((state: RootState) => state.store.createSearch);

  const dispatch = useDispatch<Dispatch>();

  const [cards, setCards] = React.useState<CardProps[]>([]);
  const [data, setData] = React.useState(store.searchbar);

  const [dataValid, setDataValid] = React.useState(store.valid);
  const [formValid, setFormValid] = React.useState(
    Object.values(dataValid).every((item) => item)
  );

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

  BLogout.callback = () => {
    dispatch.user.clear();
  };

  BShowImovels.callback = () => {
    window.location.replace('/list/announcements');
  };

  const handleData = (fieldName: string, value: any) => {
    setData({ ...data, [fieldName]: value });
    dispatch.store.createSearch({
      searchbar: {
        ...data,
        [fieldName]: value,
      },
    });
  };

  const handleValidation = (fieldName: string, value: boolean) => {
    const valid = { ...dataValid, [fieldName]: value };
    setDataValid(valid);
    dispatch.store.createSearch({
      valid,
    });
    setFormValid(Object.values(valid).every((item) => item));
  };

  return (
    <Home
      userName={userStore?.user?.firstName}
      cards={cards}
      isLogged={!!userStore?.user?.id}
      {...props}
      valid={formValid}
      handleData={handleData}
      handleValidation={handleValidation}
      data={data}
      render={{ admin: true }}
    />
  );
};

export default HomeContainer;

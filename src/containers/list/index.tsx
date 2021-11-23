import React from 'react';
import { useRouter } from 'next/router';

import { List } from '@views/list';

import { ListProps } from '@views/list/list.type';
import { UserProps } from '@components/generics/table/table.type';
import { CardProps } from '@components/generics/card/card.type';

import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, RootState } from '@store/index';

const ListContainer = (props: ListProps): React.ReactElement => {
  const {
    BLogin,
    BAnnouncements,
    BCreateAnnouncement,
    BCreateUser,
    BListUsers,
    BLogo,
    BLogout,
    BUpdatePerfil,
  } = props.buttons;

  const pubsStore = useSelector((state: RootState) => state.publication);
  const dispatch = useDispatch<Dispatch>();

  const [users, setUsers] = React.useState<UserProps[]>([]);
  const [cards, setCards] = React.useState<CardProps[]>([]);

  const router = useRouter();

  React.useEffect(() => {
    (async () => {
      await dispatch.publication.getAll();
      // Need to adjust card component
      setCards(
        pubsStore.publications.map((publication) => ({
          variant: 'secondary',
          size: 'normal',
          views: true,
          functionalities: false,
          buttons: {
            googleMap: {
              label: 'Google Map',
              size: 'medium',
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

  BLogin.callback = () => {
    router.push('/login');
  };

  BAnnouncements.callback = () => {
    router.push('/list/announcements');
  };

  BCreateAnnouncement.callback = () => {
    router.push('/announcement/address');
  };

  BCreateUser.callback = () => {
    console.log(4);
  };

  BListUsers.callback = () => {
    router.push('/list/users');
  };

  BLogo.callback = () => {
    router.push('/');
  };

  BLogout.callback = () => {
    console.log(7);
  };

  BUpdatePerfil.callback = () => {
    console.log(8);
  };

  return (
    <List
      userName="John"
      isLogged={true}
      render={{ admin: true, user: false }}
      users={users}
      cards={cards}
      quantity={cards.length || users.length}
      {...props}
    />
  );
};

export default ListContainer;

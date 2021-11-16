import React from 'react';
import { useRouter } from 'next/router';
import HttpClient from '@services/http.client';

import { ListProps } from '@views/list/list.type';
import { List } from '@views/list';

import { UserProps } from '@components/generics/table/table.type';
import { CardsViewsProps } from '@views/list/list.type';

const ListContainer = (props: ListProps): React.ReactElement => {
  const {
    BLogin,
    BAnuncements,
    BCreateAnuncement,
    BCreateUser,
    BListUsers,
    BLogo,
    BLogout,
    BUpdatePerfil,
  } = props.buttons;

  const [contenUsers, setContentUsers] = React.useState<UserProps[]>([]);
  const [contenCards, setContentCards] = React.useState<CardsViewsProps[]>([]);

  const router = useRouter();

  React.useEffect(() => {
    setContentCards([]);
  }, []);

  const getPublications = async (): Promise<void> => {
    const reponse = await HttpClient.setPath(
      'https://mocki.io/v1/87254046-9d87-4bf2-b2d1-192d0e72ae90'
    )
      .setMethod('GET')
      .send();
    console.log(reponse);
  };

  getPublications();

  BLogin.callback = () => {
    console.log(1);
  };

  BAnuncements.callback = () => {
    console.log(2);
  };

  BCreateAnuncement.callback = () => {
    router.push('/address');
  };

  BCreateUser.callback = () => {
    console.log(4);
  };

  BListUsers.callback = () => {
    console.log(5);
  };

  BLogo.callback = () => {
    console.log(6);
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
      users={contenUsers}
      cards={contenCards}
      quantity={30}
      {...props}
    />
  );
};

export default ListContainer;

import React from 'react';

import { ListProps } from '@views/list/list.type';
import { List } from '@views/list';

import { UserProps } from '@components/generics/table/table.type';
import { CardProps } from '@components/generics/card/card.type';

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
  const [contenCards, setContentCards] = React.useState<CardProps[]>([]);

  BLogin.callback = () => {
    console.log(1);
  };

  BAnuncements.callback = () => {
    console.log(2);
  };

  BCreateAnuncement.callback = () => {
    console.log(3);
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

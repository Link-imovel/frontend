import React from 'react';

import { ListUser } from '@views/listuser';
import { ListUserProps } from '@views/listuser/listuser.type';

const ListUserContainer = (props: ListUserProps): React.ReactElement => {
  const {
    BLogo,
    BSettings,
    BLogout,
    BCreateUser,
    BCreateAnuncement,
    BAnuncement,
    BListUsers,
  } = props.buttons;

  BLogo.callback = () => {
    console.log(1);
  };

  BSettings.callback = () => {
    console.log(2);
  };

  BLogout.callback = () => {
    console.log(3);
  };

  BCreateUser.callback = () => {
    console.log(4);
  };

  BCreateAnuncement.callback = () => {
    console.log(5);
  };

  BAnuncement.callback = () => {
    console.log(6);
  };

  BListUsers.callback = () => {
    console.log(7);
  };

  return <ListUser {...props} />;
};

export default ListUserContainer;

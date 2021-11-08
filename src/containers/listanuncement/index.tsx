import React from 'react';

import { ListAnuncement } from '@views/listanuncement';
import { ListAnuncementProps } from '@views/listanuncement/listanuncement.type';

import { Button } from '@components/generics/button';
import { colors } from '@theme/theme/default';
import { People } from '@components/generics/icons/people';
import { PersonAdd } from '@components/generics/icons/personadd';

const ListAnuncementContainer = (
  props: ListAnuncementProps
): React.ReactElement => {
  const {
    BLogo,
    BLogin,
    BSettings,
    BLogout,
    BCreateUser,
    BCreateAnuncement,
    BAnuncement,
    BListUsers,
  } = props.buttons;

  const { typePermition } = props;

  BLogo.callback = () => {
    console.log(1);
  };

  BLogin.callback = () => {
    console.log(2);
  };

  BSettings.callback = () => {
    console.log(3);
  };

  BLogout.callback = () => {
    console.log(4);
  };

  BCreateUser.callback = () => {
    console.log(5);
  };

  BCreateAnuncement.callback = () => {
    console.log(6);
  };

  BAnuncement.callback = () => {
    console.log(7);
  };

  BListUsers.callback = () => {
    console.log(8);
  };

  const [data, setData] = React.useState({});

  const handleData = (fieldName: string, value: any) => {
    setData({ ...data, [fieldName]: value });
  };

  return <ListAnuncement handleData={handleData} {...props} />;
};

export default ListAnuncementContainer;

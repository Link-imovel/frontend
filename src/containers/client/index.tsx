import React from 'react';

import { Client } from '@views/client';
import { ClientProps } from '@views/client/client.type';

const ClientContainer = (props: ClientProps): React.ReactElement => {
  const { BArrowBefore, BLogo, BGeneric } = props.buttons;

  BLogo.callback = () => {
    console.log(1);
  };

  BArrowBefore.callback = () => {
    console.log(2);
  };

  BGeneric.callback = () => {
    console.log(4);
  };

  const [data, setData] = React.useState({});

  const handleData = (fieldName: string, value: any) => {
    setData({ ...data, [fieldName]: value });
  };

  return <Client handleData={handleData} {...props} />;
};

export default ClientContainer;

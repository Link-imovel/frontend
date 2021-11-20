import React from 'react';

import { Description } from '@views/description';
import { DesciptionProps } from '@views/description/description.type';

const DescriptionContainer = (props: DesciptionProps): React.ReactElement => {
  const { BLogin, BLogo } = props.buttons;

  BLogo.callback = () => {
    console.log(1);
  };

  BLogin.callback = () => {
    console.log(2);
  };

  const [data, setData] = React.useState({});

  const handleData = (fieldName: string, value: any) => {
    setData({ ...data, [fieldName]: value });
  };

  return <Description {...props} handleData={handleData} />;
};

export default DescriptionContainer;

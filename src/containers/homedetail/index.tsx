import React from 'react';

import { HomeDetail } from '@views/homedetail';
import { HomeDetailProps } from '@views/homedetail/homedetail.type';

const HomeDetailContainer = (props: HomeDetailProps): React.ReactElement => {
  const { BArrowAfter, BArrowBefore, BLogo, BGeneric } = props.buttons;

  BLogo.callback = () => {
    console.log(1);
  };

  BArrowBefore.callback = () => {
    console.log(2);
  };

  BArrowAfter.callback = () => {
    console.log(3);
  };

  BGeneric.callback = () => {
    console.log(4);
  };

  const [data, setData] = React.useState({});

  const handleData = (fieldName: string, value: any) => {
    setData({ ...data, [fieldName]: value });
  };

  return <HomeDetail handleData={handleData} {...props} />;
};

export default HomeDetailContainer;

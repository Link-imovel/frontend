import React from 'react';
import { useRouter } from 'next/router';

import { Description } from '@views/description';
import { DesciptionProps } from '@views/description/description.type';

const DescriptionContainer = (props: DesciptionProps): React.ReactElement => {
  const { BLogin, BLogo } = props.buttons;

  const router = useRouter();

  BLogo.callback = () => {
    router.push('/');
  };

  BLogin.callback = () => {
    router.push('/login');
  };

  const [data, setData] = React.useState({});

  const handleData = (fieldName: string, value: any) => {
    setData({ ...data, [fieldName]: value });
  };

  return <Description {...props} handleData={handleData} />;
};

export default DescriptionContainer;

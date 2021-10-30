import React from 'react';

import { Address } from '@views/address';
import { AddressProps } from '@views/address/address.type';

const AddressContainer = (props: AddressProps): React.ReactElement => {
  const { BArrowAfter, BArrowBefore, BLogo, BGeneric } = props.buttons;

  console.log(props);

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

  return <Address handleData={handleData} {...props} />;
};

export default AddressContainer;

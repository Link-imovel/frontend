import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, RootState } from '@store/index';

import { Address } from '@views/address';
import { AddressProps } from '@views/address/address.type';

const AddressContainer = (props: AddressProps): React.ReactElement => {
  const { BArrowAfter, BArrowBefore, BLogo, BNext } = props.buttons;
  const store = useSelector((state: RootState) => state.store.createAddress);

  const [data, setData] = React.useState(store.address);
  const [dataValid, setDataValid] = React.useState(store.valid);
  const [formValid, setFormValid] = React.useState(
    Object.values(dataValid).every((item) => item)
  );

  const dispatch = useDispatch<Dispatch>();

  BLogo.callback = () => {
    console.log(1);
  };

  BArrowBefore.callback = () => {
    console.log(2);
  };

  BArrowAfter.callback = () => {
    console.log(3);
  };

  BNext.callback = () => {
    console.log(4);
  };

  const handleData = (fieldName: string, value: any) => {
    setData({ ...data, [fieldName]: value });
    dispatch.store.createAddress({
      address: {
        ...data,
        [fieldName]: value,
      },
    });
  };

  const handleValidation = (fieldName: string, value: boolean) => {
    const valid = { ...dataValid, [fieldName]: value };
    setDataValid(valid);
    dispatch.store.createAddress({
      valid,
    });
    setFormValid(Object.values(valid).every((item) => item));
  };

  return (
    <Address
      valid={formValid}
      handleData={handleData}
      handleValidation={handleValidation}
      data={data}
      {...props}
    />
  );
};

export default AddressContainer;

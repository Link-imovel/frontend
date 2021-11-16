import React from 'react';
import { useRouter } from 'next/router';

import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, RootState } from '@store/index';

import { HomeDetail } from '@views/homedetail';
import { HomeDetailProps } from '@views/homedetail/homedetail.type';

const HomeDetailContainer = (props: HomeDetailProps): React.ReactElement => {
  const { BArrowAfter, BArrowBefore, BLogo, BNext } = props.buttons;
  const store = useSelector((state: RootState) => state.store.createHomeDetail);

  const [data, setData] = React.useState(store.homedetail);
  const [dataValid, setDataValid] = React.useState(store.valid);
  const [formValid, setFormValid] = React.useState(
    Object.values(dataValid).every((item) => item)
  );

  const router = useRouter();

  const dispatch = useDispatch<Dispatch>();

  BLogo.callback = () => {
    router.push('/');
  };

  BArrowBefore.callback = () => {
    router.push('/address');
  };

  BArrowAfter.callback = () => {
    router.push('/client');
  };

  BNext.callback = () => {
    console.log(4);
  };

  const handleData = (fieldName: string, value: any) => {
    setData({ ...data, [fieldName]: value });
    dispatch.store.createHomeDetail({
      homedetail: {
        ...data,
        [fieldName]: value,
      },
    });
  };

  const handleValidation = (fieldName: string, value: boolean) => {
    const valid = { ...dataValid, [fieldName]: value };
    setDataValid(valid);
    dispatch.store.createHomeDetail({
      valid,
    });
    setFormValid(Object.values(valid).every((item) => item));
  };

  return (
    <HomeDetail
      valid={formValid}
      handleValidation={handleValidation}
      handleData={handleData}
      data={data}
      {...props}
    />
  );
};

export default HomeDetailContainer;

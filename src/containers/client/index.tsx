import React from 'react';
import { useRouter } from 'next/router';

import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, RootState } from '@store/index';

import { Client } from '@views/client';
import { ClientProps } from '@views/client/client.type';
import { useBreadcrumb } from '@hooks/breadcrumb';

const ClientContainer = (props: ClientProps): React.ReactElement => {
  const { BArrowBefore, BLogo, BCreate } = props.buttons;
  const store = useSelector((state: RootState) => state.store.createClient);

  const [data, setData] = React.useState(store.client);
  const [dataValid, setDataValid] = React.useState(store.valid);
  const [formValid, setFormValid] = React.useState(
    Object.values(dataValid).every((item) => item)
  );

  const router = useRouter();

  const { paths, next, previous } = useBreadcrumb();

  const dispatch = useDispatch<Dispatch>();

  React.useEffect(() => {
    next({ title: props.title, url: router.asPath });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.title, router]);

  BLogo.callback = () => {
    router.push('/');
  };

  BArrowBefore.callback = () => {
    previous();
    router.push('/announcement/details');
  };

  BCreate.callback = () => {
    window.location.replace('/list/announcements');
  };

  const handleData = (fieldName: string, value: any) => {
    setData({ ...data, [fieldName]: value });
    dispatch.store.createClient({
      client: {
        ...data,
        [fieldName]: value,
      },
    });
  };

  const handleValidation = (fieldName: string, value: boolean) => {
    const valid = { ...dataValid, [fieldName]: value };
    setDataValid(valid);
    dispatch.store.createClient({
      valid,
    });
    setFormValid(Object.values(valid).every((item) => item));
  };

  return (
    <Client
      valid={formValid}
      handleValidation={handleValidation}
      handleData={handleData}
      data={data}
      options={[]}
      {...props}
      breadCrumb={{ paths }}
    />
  );
};

export default ClientContainer;

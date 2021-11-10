import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, RootState } from '@store/index';

import { Generic } from '@views/generic';
import { GenericProps } from '@views/generic/generic.type';

import { User } from '@store/models/user/user.interface';
import { UserFields } from '@store/models/store/store.interface';

const GenericContainer = (props: GenericProps): React.ReactElement => {
  const { BLogo, BArrowBefore, BLogin } = props.buttons;
  const userStore = useSelector((state: RootState) => state.user);
  const store = useSelector((state: RootState) => state.store.createUser);

  const [data, setData] = React.useState(store.user);
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

  BLogin.callback = async () => {
    const user = ({ ...data, valid: undefined } as unknown) as User;
    switch (props.type) {
      case 'update':
        if (userStore.user.id)
          await dispatch.user.update({
            id: userStore.user.id,
            data: user,
          });
        break;
      case 'create':
        await dispatch.user.create(user);
        break;
      default:
        await dispatch.user.getAll();
    }
  };

  const handleData = (fieldName: string, value: any) => {
    setData({ ...data, [fieldName]: value });
    dispatch.store.createUser({
      user: {
        ...data,
        [fieldName]: value,
      },
    });
  };

  const handleValidation = (fieldName: string, value: boolean) => {
    const valid = { ...dataValid, [fieldName]: value };
    setDataValid(valid);
    dispatch.store.createUser({
      valid,
    });
    setFormValid(Object.values(valid).every((item) => item));
  };

  return (
    <Generic
      valid={formValid}
      handleData={handleData}
      handleValidation={handleValidation}
      data={data}
      {...props}
    />
  );
};

export default GenericContainer;

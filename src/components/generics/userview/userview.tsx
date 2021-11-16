import React from 'react';

import * as S from './userview.style';
import { UserViewProps } from './userview.type';
import { User } from '@components/generics/icons/user';

const UserView = ({
  user,
  color,
}: Required<UserViewProps>): React.ReactElement => {
  return (
    <S.Container color={color}>
      <User width={20} height={20} fill={color} /> <span>Olá, {user}</span>
    </S.Container>
  );
};

export { UserView };

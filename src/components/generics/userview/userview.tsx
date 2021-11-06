import React from 'react';

import * as S from './userview.style';
import { UserViewProps } from './userview.type';
import { User } from '@components/generics/icons/user';

const UserView = ({ user }: Required<UserViewProps>): React.ReactElement => {
  return (
    <S.Container>
      <User width={20} height={20} /> <span>Olá, {user}</span>
    </S.Container>
  );
};

export { UserView };

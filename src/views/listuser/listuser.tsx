import React from 'react';

import { Page } from '@components/container/page';
import { Button } from '@components/generics/button';
import { Logo } from '@components/generics/icons/logo';

import * as S from './listuser.styles';
import { colors } from '@theme/theme/default';
import { Menu } from '@components/generics/icons/menu';
import { Article } from '@components/generics/icons/article';
import { PersonAdd } from '@components/generics/icons/personadd';
import { People } from '@components/generics/icons/people';
import { Logout } from '@components/generics/icons/logout';
import { Settings } from '@components/generics/icons/settings';
import { ListUserProps } from './listuser.type';
import { UserView } from '@components/generics/userview';
import { Table } from '@components/container/table';

const ListUser = ({
  user,
  buttons,
  users,
}: Required<ListUserProps>): React.ReactElement => {
  return (
    <Page>
      <S.ListUserContainer>
        <S.ListUserMenuWrapper>
          <Button
            variant="transparent"
            size="xsmall"
            radius="square"
            icon={<Logo fill={colors.blackGrey} />}
            onClick={buttons.BLogo.callback}
          />
          <UserView user={user} />
          <S.ListUserDescription>
            Todos os usuários que estão cadastrados na aplicação se encontra
            aqui
          </S.ListUserDescription>
          <S.ListUserMenuTitle>Menu</S.ListUserMenuTitle>
          <Button
            variant="primary"
            label={buttons.BAnuncement.label}
            size="default"
            color={colors.white}
            iconReverse={true}
            icon={<Menu width={20} height={20} fill={colors.white} />}
            onClick={buttons.BAnuncement.callback}
          />
          <Button
            variant="primary"
            label={buttons.BCreateAnuncement.label}
            size="default"
            color={colors.white}
            iconReverse={true}
            icon={<Article width={20} height={20} fill={colors.white} />}
            onClick={buttons.BCreateAnuncement.callback}
          />
          <Button
            variant="primary"
            label={buttons.BCreateUser.label}
            size="default"
            color={colors.white}
            iconReverse={true}
            icon={<PersonAdd width={20} height={20} fill={colors.white} />}
            onClick={buttons.BCreateUser.callback}
          />
          <Button
            variant="primary"
            label={buttons.BListUsers.label}
            size="default"
            color={colors.white}
            iconReverse={true}
            icon={<People width={20} height={20} fill={colors.white} />}
            onClick={buttons.BListUsers.callback}
          />
          <Button
            variant="primary"
            label={buttons.BSettings.label}
            size="default"
            color={colors.white}
            iconReverse={true}
            icon={<Settings width={20} height={20} fill={colors.white} />}
            onClick={buttons.BSettings.callback}
          />
          <Button
            variant="primary"
            label={buttons.BLogout.label}
            size="default"
            color={colors.white}
            iconReverse={true}
            icon={<Logout width={20} height={20} fill={colors.white} />}
            onClick={buttons.BLogout.callback}
          />
        </S.ListUserMenuWrapper>
        <S.ListUserWrapper>
          <S.ListUserQuantity>20 usuários mostrados</S.ListUserQuantity>
          <Table users={users} />
        </S.ListUserWrapper>
      </S.ListUserContainer>
    </Page>
  );
};

export { ListUser };

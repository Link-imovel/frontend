import React from 'react';

import { Button } from '../button';
import { UserView } from '../userview';

import { GroupProps } from './group.type';
import { Logo } from '../icons/logo';
import { Menu } from '../icons/menu';

import * as S from './group.style';
import { colors } from '@theme/theme/default';
import { Article } from '../icons/article';
import { PersonAdd } from '../icons/personadd';
import { People } from '../icons/people';
import { Settings } from '../icons/settings';
import { Logout } from '../icons/logout';

const Group = ({
  user,
  description,
  buttons,
  render,
}: Required<GroupProps>): React.ReactElement => {
  const renderButtons = React.useCallback((): JSX.Element | null => {
    if (render.admin) {
      return (
        <>
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
        </>
      );
    }
    return null;
  }, [
    buttons.BCreateUser.callback,
    buttons.BCreateUser.label,
    buttons.BListUsers.callback,
    buttons.BListUsers.label,
    render.admin,
  ]);

  return (
    <S.Container>
      <Button
        variant="transparent"
        size="xsmall"
        radius="square"
        icon={<Logo fill={colors.blackGrey} />}
        onClick={buttons.BLogo.callback}
      />
      <UserView user={user} />
      <S.Description>{description}</S.Description>
      <S.Title>Menu</S.Title>
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
      {renderButtons()}
      <Button
        variant="primary"
        label={buttons.BUpdatePerfil.label}
        size="default"
        color={colors.white}
        iconReverse={true}
        icon={<Settings width={20} height={20} fill={colors.white} />}
        onClick={buttons.BUpdatePerfil.callback}
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
    </S.Container>
  );
};

export { Group };

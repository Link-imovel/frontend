import React from 'react';

import { Page } from '@components/container/page';
import { Button } from '@components/generics/button';
import { UserView } from '@components/generics/userview';
import { Card } from '@components/generics/card';
import { Table } from '@components/generics/table';

import { Logo } from '@components/generics/icons/logo';
import { Article } from '@components/generics/icons/article';
import { Logout } from '@components/generics/icons/logout';
import { Menu } from '@components/generics/icons/menu';
import { People } from '@components/generics/icons/people';
import { PersonAdd } from '@components/generics/icons/personadd';
import { Settings } from '@components/generics/icons/settings';

import * as S from './list.style';
import { ListProps } from './list.type';
import { colors } from '@theme/theme/default';

const List = ({
  userLogged,
  users,
  description,
  buttons,
  render,
  isLogged,
  cards,
  content,
  quantity,
}: Required<ListProps>): React.ReactElement => {
  const renderButtons = React.useCallback((): JSX.Element | null => {
    if (render.admin) {
      return (
        <>
          <Button
            variant="primary"
            label={buttons.BCreateUser.label || 'Criar usuário'}
            size="default"
            color={colors.white}
            iconReverse={true}
            icon={<PersonAdd width={20} height={20} fill={colors.white} />}
            onClick={buttons.BCreateUser.callback}
          />
          <Button
            variant="primary"
            label={buttons.BListUsers.label || 'Listar usuário '}
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

  const RenderContent = React.useCallback(():
    | JSX.Element[]
    | JSX.Element
    | null => {
    if (content.table) {
      return (
        <S.Wrapper>
          <Table users={users} />
        </S.Wrapper>
      );
    }

    if (content.cards) {
      return (
        <S.Wrapper>
          {cards.map((props, index) => (
            <Card key={index} {...props} />
          ))}
        </S.Wrapper>
      );
    }

    return null;
  }, [cards, content.cards, content.table, users]);

  return (
    <Page>
      <S.Container>
        <S.FieldsWrapper>
          <Button
            variant="transparent"
            size="xsmall"
            radius="square"
            icon={<Logo fill={colors.blackGrey} />}
            onClick={buttons.BLogo.callback}
          />
          {isLogged ? (
            <UserView user={userLogged} />
          ) : (
            <Button
              variant="primary"
              label={buttons.BLogin.label || 'Entrar'}
              onClick={buttons.BLogin.callback}
            />
          )}
          <S.Description>{description}</S.Description>
          <S.Line />
          <S.Title>Menu</S.Title>
          <Button
            variant="primary"
            label={buttons.BAnuncement.label || 'Anuncios'}
            size="default"
            color={colors.white}
            iconReverse={true}
            icon={<Menu width={20} height={20} fill={colors.white} />}
            onClick={buttons.BAnuncement.callback}
          />
          <Button
            variant="primary"
            label={buttons.BCreateAnuncement.label || 'Criar anuncio'}
            size="default"
            color={colors.white}
            iconReverse={true}
            icon={<Article width={20} height={20} fill={colors.white} />}
            onClick={buttons.BCreateAnuncement.callback}
          />
          {renderButtons()}
          <Button
            variant="primary"
            label={buttons.BUpdatePerfil.label || 'Atualizar Perfil'}
            size="default"
            color={colors.white}
            iconReverse={true}
            icon={<Settings width={20} height={20} fill={colors.white} />}
            onClick={buttons.BUpdatePerfil.callback}
          />
          <Button
            variant="primary"
            label={buttons.BLogout.label || 'Sair'}
            size="default"
            color={colors.white}
            iconReverse={true}
            icon={<Logout width={20} height={20} fill={colors.white} />}
            onClick={buttons.BLogout.callback}
          />
        </S.FieldsWrapper>
        <S.Content>
          <S.Quantity>{quantity} Resultados</S.Quantity>
          {RenderContent()}
        </S.Content>
      </S.Container>
    </Page>
  );
};

export { List };

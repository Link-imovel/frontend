import React from 'react';

import { Page } from '@components/container/page';
import { Button } from '@components/generics/button';
import { Dropdown } from '@components/generics/dropdown';

import * as S from './listanuncement.style';
import { colors } from '@theme/theme/default';
import { Logo } from '@components/generics/icons/logo';
import { Menu } from '@components/generics/icons/menu';
import { Article } from '@components/generics/icons/article';
import { PersonAdd } from '@components/generics/icons/personadd';
import { People } from '@components/generics/icons/people';
import { Logout } from '@components/generics/icons/logout';
import { Settings } from '@components/generics/icons/settings';
import { ListAnuncementProps } from './listanuncement.type';
import { UserView } from '@components/generics/userview';
import { Input } from '@components/generics/input';

const ListAnuncement = ({
  user,
  buttons,
  typePermition,
  handleData,
  isLogged,
}: Required<ListAnuncementProps>): React.ReactElement => {
  console.log(isLogged);

  return (
    <Page>
      <S.ListAnuncementContainer>
        <S.ListAnuncementMenuWrapper typePermission={typePermition}>
          <Button
            variant="transparent"
            size="xsmall"
            radius="square"
            icon={<Logo fill={colors.blackGrey} />}
            onClick={buttons.BLogo.callback}
          />
          {isLogged ? (
            <UserView user={user} />
          ) : (
            <Button
              variant="primary"
              label={buttons.BLogin.label || 'Entrar'}
              onClick={buttons.BLogin.callback}
            />
          )}
          <S.ListAnuncementDescription>
            Filtros que podem ser aplicados, para melhorar a sua busca.
          </S.ListAnuncementDescription>
          <Dropdown label="Quarto" />
          <Dropdown label="Banheiro" />
          <Dropdown label="Vagas" />
          <Dropdown label="Area de serviço" />
          <Input
            id="value"
            label="Preço"
            type="text"
            name="value"
            placeholder="Digite um preço"
            onChange={(el) => handleData(el.target.id, el.target.value)}
            validators={[
              {
                type: 'Required',
                message: 'Campo é requerido',
              },
            ]}
          />
          {isLogged ? (
            <>
              <S.Line />
              <S.ListAnuncementMenuTitle>Menu</S.ListAnuncementMenuTitle>
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
              {typePermition == 'adm' ? (
                <>
                  <Button
                    variant="primary"
                    label={buttons.BCreateUser.label}
                    size="default"
                    color={colors.white}
                    iconReverse={true}
                    icon={
                      <PersonAdd width={20} height={20} fill={colors.white} />
                    }
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
              ) : (
                <></>
              )}
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
            </>
          ) : (
            <div />
          )}
        </S.ListAnuncementMenuWrapper>
        <S.ListAnuncementWrapper>
          <S.ListAnuncementQuantity>
            300 imóveis mostrados
          </S.ListAnuncementQuantity>
        </S.ListAnuncementWrapper>
      </S.ListAnuncementContainer>
    </Page>
  );
};

export { ListAnuncement };

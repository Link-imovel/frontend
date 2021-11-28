import React from 'react';
import { useRouter } from 'next/router';

import { Button } from '../button';

import { Menu } from '../icons/menu';
import { User } from '../icons/user';
import { PersonAdd } from '../icons/personadd';
import { Settings } from '../icons/settings';
import { People } from '../icons/people';
import { Article } from '../icons/article';

import * as S from './dropdownheader.style';
import { DropdownHeaderProps } from './dropdownheader.type';
import { colors } from '@theme/theme/default';

const DropdownHeader = ({
  user,
  color,
  render,
}: DropdownHeaderProps): React.ReactElement => {
  const [show, setShow] = React.useState(false);
  const router = useRouter();

  const send = React.useCallback(
    (url: string) => {
      router.push(url);
    },
    [router]
  );

  const toogle = React.useCallback(() => {
    if (!show) {
      setShow(true);
      return;
    }
    setShow(false);
  }, [show]);

  const renderButtons = React.useCallback((): JSX.Element | null => {
    if (render?.admin) {
      return (
        <>
          <S.ItemContent>
            <Button
              variant="primary"
              label="Criar usuário"
              size="default"
              color={colors.white}
              iconReverse={true}
              icon={<PersonAdd width={20} height={20} fill={colors.white} />}
              onClick={() => send('/create-user')}
            />
          </S.ItemContent>
          <S.ItemContent>
            <Button
              variant="primary"
              label="Listar usuário"
              size="default"
              color={colors.white}
              iconReverse={true}
              icon={<People width={20} height={20} fill={colors.white} />}
              onClick={() => send('/list/users')}
            />
          </S.ItemContent>
        </>
      );
    }
    return null;
  }, [render?.admin, send]);

  return (
    <S.Container show={show}>
      <S.UserContent>
        <Button
          variant="transparent"
          size="default"
          label={`Olá, ${user}`}
          justifyContent="space-between"
          radius="square"
          color={color || colors.blackGrey}
          iconReverse={true}
          icon={
            <User width={20} height={20} fill={color || colors.blackGrey} />
          }
          onClick={toogle}
        />
      </S.UserContent>
      <S.MenuContent>
        <S.Wrapper>
          <S.ItemContent>
            <Button
              variant="primary"
              label="Anuncios"
              size="default"
              color={colors.white}
              iconReverse={true}
              icon={<Menu width={20} height={20} fill={colors.white} />}
              onClick={() => send('/list/announcements')}
            />
          </S.ItemContent>
          <S.ItemContent>
            <Button
              variant="primary"
              label="Criar anuncio"
              size="default"
              color={colors.white}
              iconReverse={true}
              icon={<Article width={20} height={20} fill={colors.white} />}
              onClick={() => send('/announcement/address')}
            />
          </S.ItemContent>
          {renderButtons()}
          <S.ItemContent>
            <Button
              variant="primary"
              label="Atualizar Perfil"
              size="default"
              color={colors.white}
              iconReverse={true}
              icon={<Settings width={20} height={20} fill={colors.white} />}
              onClick={() => send('/update-user')}
            />
          </S.ItemContent>
        </S.Wrapper>
      </S.MenuContent>
    </S.Container>
  );
};

export { DropdownHeader };

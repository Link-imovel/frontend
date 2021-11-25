import React from 'react';

import { Button } from '../button';

import { Menu } from '../icons/menu';
import { User } from '@components/generics/icons/user';

import * as S from './userview.style';
import { UserViewProps } from './userview.type';
import { colors } from '@theme/theme/default';

const UserView = ({ user, color }: UserViewProps): React.ReactElement => {
  const [show, setShow] = React.useState(false);

  const toogle = React.useCallback(() => {
    if (!show) {
      setShow(true);
      return;
    }
    setShow(false);
  }, [show]);

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
              onClick={() => console.log(1)}
            />
          </S.ItemContent>
          <S.ItemContent>
            <Button
              variant="primary"
              label="Criar anuncio"
              size="default"
              color={colors.white}
              iconReverse={true}
              icon={<Menu width={20} height={20} fill={colors.white} />}
              onClick={() => console.log(1)}
            />
          </S.ItemContent>
          <S.ItemContent>
            <Button
              variant="primary"
              label="Atualizar Perfil"
              size="default"
              color={colors.white}
              iconReverse={true}
              icon={<Menu width={20} height={20} fill={colors.white} />}
              onClick={() => console.log(1)}
            />
          </S.ItemContent>
          <S.ItemContent>
            <Button
              variant="primary"
              label="Anuncios"
              size="default"
              color={colors.white}
              iconReverse={true}
              icon={<Menu width={20} height={20} fill={colors.white} />}
              onClick={() => console.log(1)}
            />
          </S.ItemContent>
        </S.Wrapper>
      </S.MenuContent>
    </S.Container>
  );
};

export { UserView };

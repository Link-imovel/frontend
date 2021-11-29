import React from 'react';

import { Page } from '@components/container/page';
import { Card as CardContainer } from '@components/container/card';
import { Button } from '@components/generics/button';
import { Card } from '@components/generics/card';
import { Table } from '@components/generics/table';
import { Dropdown } from '@components/generics/dropdown';
import { Input } from '@components/generics/input';

import { Logo } from '@components/generics/icons/logo';
import { Article } from '@components/generics/icons/article';
import { Logout } from '@components/generics/icons/logout';
import { Menu } from '@components/generics/icons/menu';
import { People } from '@components/generics/icons/people';
import { PersonAdd } from '@components/generics/icons/personadd';
import { Settings } from '@components/generics/icons/settings';
import { Close } from '@components/generics/icons/close';
import { Search } from '@components/generics/icons/search';
import { User } from '@components/generics/icons/user';

import * as S from './list.style';
import { ListViewProps } from './list.type';
import { options } from '@components/generics/dropdown/dropdown.options';
import { colors } from '@theme/theme/default';
import { Pagination } from '@components/generics/pagination';
import { SearchBar } from '@components/generics/searchbar';
import { Formatters } from '@helpers/formatters';

const List = ({
  userName,
  users,
  description,
  buttons,
  permissionType,
  isLogged,
  cards,
  content,
  quantity,
  dropdown,
  isMobile,
  handleData,
  data,
  onSelect,
}: ListViewProps): React.ReactElement => {
  const [show, setShow] = React.useState(false);

  const toogleMenu = React.useCallback(() => {
    if (!show) {
      setShow(true);
      return;
    }
    setShow(false);
  }, [show]);

  const renderButtons = React.useCallback((): JSX.Element | null => {
    if (permissionType?.admin) {
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
            label={buttons.BListUsers.label || 'Listar usuário'}
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
    permissionType?.admin,
  ]);

  const renderContent = React.useCallback(():
    | JSX.Element[]
    | JSX.Element
    | null => {
    if (content.table) {
      console.log('');
      return (
        <S.Wrapper>
          <Table users={users} />
        </S.Wrapper>
      );
    }

    if (content.cards) {
      return (
        <S.Wrapper>
          {cards.length
            ? cards.map((props, index) => <Card key={index} {...props} />)
            : [...Array(2)].map((_, i) => (
                <CardContainer
                  size={isMobile ? 'small' : 'normal'}
                  key={i}
                  onClick={() => {}}
                />
              ))}
        </S.Wrapper>
      );
    }

    return null;
  }, [cards, content.cards, content.table, isMobile, users]);

  const renderDropDown = React.useCallback((): JSX.Element | null => {
    if (dropdown) {
      return (
        <>
          <Dropdown
            label="Quarto"
            placeholder="Informe a quantidade"
            options={options.bedroom}
            onSelect={(opt) => {
              handleData('bedroom', opt.label);
            }}
            selectedValue={data?.bedroom}
          />
          <Dropdown
            label="Banheiro"
            placeholder="Informe a quantidade"
            options={options.bathroom}
            onSelect={(opt) => {
              handleData('bathroom', opt.label);
            }}
            selectedValue={data?.bathroom}
          />
          <Dropdown
            label="Garagem"
            placeholder="Informe a quantidade"
            options={options.garage}
            onSelect={(opt) => {
              handleData('garage', opt.label);
            }}
            selectedValue={data?.garage}
          />
          <Dropdown
            label="Area de serviço"
            placeholder="Informe a quantidade"
            options={options.serviceArea}
            onSelect={(opt) => {
              handleData('serviceArea', opt.label);
            }}
            selectedValue={data?.serviceArea}
          />
          <Input
            id="price"
            label="Preço do imóvel"
            type="text"
            name="price"
            placeholder="Informe o valor"
            onChange={(el) =>
              handleData(el.target.id, Formatters.formatPrice(el.target.value))
            }
            value={data?.price}
            validators={[
              {
                type: 'Required',
                message: 'Campo é requerido',
              },
              {
                type: 'NotBlank',
                message: 'O campo não pode estar em branco.',
              },
            ]}
          />
          <Button
            variant="primary"
            size="default"
            label={buttons.BSearch.label || 'Buscar'}
            color={colors.white}
            background={colors.greyBlue}
            iconReverse={true}
            icon={<Search width={24} height={24} fill={colors.white} />}
            onClick={buttons.BSearch.callback}
          />
        </>
      );
    }
    return null;
  }, [
    buttons.BSearch.callback,
    buttons.BSearch.label,
    data?.bathroom,
    data?.bedroom,
    data?.garage,
    data?.price,
    data?.serviceArea,
    dropdown,
    handleData,
  ]);

  return (
    <Page>
      <S.Container>
        <Button
          variant="transparent"
          size="small"
          justifyContent="space-between"
          radius="square"
          icon={<Menu width={20} height={20} fill={colors.blackGrey} />}
          onClick={toogleMenu}
        />
        <S.MenuContainer {...content} {...permissionType} show={show}>
          <S.Header>
            <Button
              variant="transparent"
              size="xsmall"
              radius="square"
              icon={<Logo fill={colors.blackGrey} />}
              onClick={buttons.BLogo.callback}
            />
            <Button
              variant="transparent"
              size="small"
              justifyContent="space-between"
              radius="square"
              icon={<Close width={20} height={20} fill={colors.blackGrey} />}
              onClick={toogleMenu}
            />
          </S.Header>
          {isLogged ? (
            <S.UserContent>
              <User width={20} height={20} /> <span>{userName}</span>
            </S.UserContent>
          ) : (
            <Button
              variant="primary"
              label={buttons.BLogin.label || 'Entrar'}
              onClick={buttons.BLogin.callback}
            />
          )}
          <S.Description>{description}</S.Description>
          {renderDropDown()}
          {isLogged ? (
            <>
              <S.Title>Menu</S.Title>
              <Button
                variant="primary"
                label={buttons.BAnnouncements.label || 'Anuncios'}
                size="default"
                color={colors.white}
                iconReverse={true}
                icon={<Menu width={20} height={20} fill={colors.white} />}
                onClick={buttons.BAnnouncements.callback}
              />
              <Button
                variant="primary"
                label={buttons.BCreateAnnouncement.label || 'Criar anuncio'}
                size="default"
                color={colors.white}
                iconReverse={true}
                icon={<Article width={20} height={20} fill={colors.white} />}
                onClick={buttons.BCreateAnnouncement.callback}
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
            </>
          ) : (
            <></>
          )}
        </S.MenuContainer>
        <S.Content>
          {content.cards && <SearchBar handleData={handleData} data={data} />}
          <S.Quantity>{quantity} resultados retornado</S.Quantity>
          {renderContent()}
          <Pagination quantity={quantity} onSelect={onSelect} />
        </S.Content>
      </S.Container>
    </Page>
  );
};

export { List };

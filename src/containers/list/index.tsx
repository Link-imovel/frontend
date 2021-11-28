import React from 'react';
import { useRouter } from 'next/router';

import { List } from '@views/list';

import { ListProps } from '@views/list/list.type';
import { TableProps } from '@components/generics/table/table.type';
import { CardProps } from '@components/generics/card/card.type';

import { useDispatch, useSelector } from 'react-redux';

import { useMobile } from '@hooks/mobile';
import { BoxMessage } from '@components/generics/boxmessage';
import { useBoxMessage } from '@hooks/boxmessage';
import { RootStore } from '@store/store.interface';

const ListContainer = (props: ListProps): React.ReactElement => {
  const {
    BLogin,
    BAnnouncements,
    BCreateAnnouncement,
    BCreateUser,
    BListUsers,
    BLogo,
    BLogout,
    BUpdatePerfil,
  } = props.buttons;

  const { content } = props;

  const { isMobile } = useMobile();

  const pubsStore = useSelector((state: RootStore) => state.publication);
  const userStore = useSelector((state: RootStore) => state.user);
  const dispatch = useDispatch();

  const store = useSelector((state: RootStore) => state.store.listannouncement);

  const [data, setData] = React.useState(store.listannouncement);
  const [dataValid, setDataValid] = React.useState(store.valid);
  const [formValid, setFormValid] = React.useState(
    Object.values(dataValid).every((item) => item)
  );

  const [users, setUsers] = React.useState<TableProps[]>([]);
  const [cards, setCards] = React.useState<CardProps[]>(
    pubsStore.publications.map((publication) => ({
      variant: 'secondary',
      size: isMobile() ? 'small' : 'normal',
      views: true,
      functionalities: false,
      buttons: {
        googleMap: {
          label: 'Google Map',
          size: 'medium',
        },
        visualize: {
          size: 'medium',
        },
      },
      publication,
    }))
  );

  const [page, setPage] = React.useState(1);

  const router = useRouter();

  const { modal } = useBoxMessage();

  const typeMessage = (): string | undefined => {
    if (content.cards) {
      return 'Tem certeza que deseja excluir usuário de creci: 234122.';
    }
    if (content.table) {
      return 'Tem certeza que deseja excluir anúncio de referência: ZL234.';
    }
  };

  BLogin.callback = () => {
    router.push('/login');
  };

  BAnnouncements.callback = () => {
    router.push('/list/announcements');
  };

  BCreateAnnouncement.callback = () => {
    router.push('/announcement/address');
  };

  BCreateUser.callback = () => {
    router.push('/create-user');
  };

  BListUsers.callback = () => {
    router.push('/list/users');
  };

  BLogo.callback = () => {
    router.push('/');
  };

  BLogout.callback = () => {
    dispatch({});
  };

  BUpdatePerfil.callback = () => {
    router.push('/update-user');
  };

  const handleData = (fieldName: string, value: any) => {
    setData({ ...data, [fieldName]: value });
    dispatch({
      listannouncement: {
        ...data,
        [fieldName]: value,
      },
    });
  };

  const handleValidation = (fieldName: string, value: boolean) => {
    const valid = { ...dataValid, [fieldName]: value };
    setDataValid(valid);
    dispatch({
      valid,
    });
    setFormValid(Object.values(valid).every((item) => item));
  };

  return (
    <>
      <BoxMessage open={modal.open} title={typeMessage()} />
      <List
        valid={formValid}
        handleData={handleData}
        handleValidation={handleValidation}
        data={data}
        userName={userStore?.user?.firstName}
        isLogged={!!userStore?.user?.id}
        render={{ admin: true, user: false }}
        users={users}
        cards={cards}
        quantity={cards.length || users.length}
        isMobile={isMobile()}
        {...props}
      />
    </>
  );
};

export default ListContainer;

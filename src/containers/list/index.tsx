import React from 'react';
import { useRouter } from 'next/router';

import { List } from '@views/list';

import { ListProps } from '@views/list/list.type';

import { useDispatch, useSelector } from 'react-redux';
import { actions as pubsActions } from '@store/ducks/publications';
import { RootStore } from '@store/store.interface';
import { User } from '@store/ducks/user/user.interface';

import { useMobile } from '@hooks/mobile';
import { BoxMessage } from '@components/generics/boxmessage';
import { useBoxMessage } from '@hooks/boxmessage';
import { ListAnnouncementFields } from '@store/ducks/store/store.interface';

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
  const router = useRouter();
  const { content } = props;
  const { isMobile } = useMobile();
  const { modal } = useBoxMessage();

  const pubsStore = useSelector((state: RootStore) => state.publication);
  const userStore = useSelector((state: RootStore) => state.user);
  const dispatch = useDispatch();

  const [data, setData] = React.useState<ListAnnouncementFields>();

  const [users, setUsers] = React.useState<User[]>([]);
  const [isLogged, setIsLogged] = React.useState<boolean>();

  React.useEffect(() => {
    setIsLogged(!!userStore?.user?.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // it's need change this here
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
    setData({ ...data, [fieldName]: value } as ListAnnouncementFields);
    dispatch({
      listannouncement: {
        ...data,
        [fieldName]: value,
      },
    });
  };

  const permissionType = React.useCallback((): Record<string, any> => {
    return {
      admin: userStore?.user?.permission?.name === 'admin',
      user: userStore?.user?.permission?.name === 'user',
    };
  }, [userStore?.user?.permission?.name]);

  return (
    <>
      <BoxMessage open={modal.open} title={typeMessage()} />
      <List
        handleData={handleData}
        data={data}
        userName={userStore?.user?.firstName}
        isLogged={!!isLogged}
        permissionType={permissionType()}
        users={users}
        cards={pubsStore.publications.map((publication) => ({
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
        }))}
        quantity={pubsStore.publications.length || users.length}
        isMobile={isMobile()}
        {...props}
      />
    </>
  );
};

export default ListContainer;

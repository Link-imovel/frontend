import React from 'react';
import { useRouter } from 'next/router';

import { List } from '@views/list';
import { ListProps } from '@views/list/list.type';
import { ListAnnouncementFields } from '@store/ducks/store/store.interface';

import { useBoxMessage } from '@hooks/boxmessage';
import { BoxMessage } from '@components/generics/boxmessage';
import { ButtonsProps } from '@components/generics/boxmessage/boxmessage.type';

import { useDispatch, useSelector } from 'react-redux';
import { actions as pubsActions } from '@store/ducks/publications';
import { actions as usersctions } from '@store/ducks/user';
import { actions as storeActions } from '@store/ducks/store';
import { RootStore } from '@store/store.interface';

import { useMobile } from '@hooks/mobile';

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
    BSearch,
  } = props.buttons;
  const router = useRouter();
  const { isMobile } = useMobile();
  const { modal, closeModal } = useBoxMessage();

  const pubsStore = useSelector((state: RootStore) => state.publication);
  const userStore = useSelector((state: RootStore) => state.user);
  const dispatch = useDispatch();

  const [data, setData] = React.useState<ListAnnouncementFields>();
  const [page, setPage] = React.useState(1);
  const [isLogged, setIsLogged] = React.useState<boolean>();

  React.useEffect(() => {
    setIsLogged(!!userStore?.user?.id);
    dispatch(pubsActions.getPublicationsRequest({ page }));
    dispatch(usersctions.getAllUsersRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const typeMessage = React.useCallback((): string | undefined => {
    if (props?.content?.cards) {
      const publication = pubsStore.publications.find(
        (publication) => publication.id === modal.id
      );
      return `Tem certeza que deseja excluir anúncio de referência: ${publication?.home?.ref}`;
    }
    if (props?.content?.table) {
      const user = userStore.users.find((user) => user?.id === modal.id);
      return `Tem certeza que deseja excluir usuario de CRECI: ${user?.creci}`;
    }
  }, [
    modal.id,
    props?.content?.cards,
    props?.content?.table,
    pubsStore.publications,
    userStore.users,
  ]);

  const getQuantity = React.useCallback(() => {
    if (props?.slug?.includes('list/announcements')) {
      return pubsStore?.publications?.length;
    }
    if (props?.slug?.includes('list/users')) {
      return userStore?.users?.length;
    }
  }, [props?.slug, pubsStore?.publications?.length, userStore?.users?.length]);

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
    router.push('/user/create');
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

  BSearch.callback = () => {
    dispatch(pubsActions.getPublicationsRequest({ ...data }));
  };

  BUpdatePerfil.callback = () => {
    router.push('/update-user');
  };

  const actionsBoxMessage = (): ButtonsProps => {
    return {
      BClose: {
        callback: () => {
          closeModal();
        },
      },
      BDelete: {
        callback: () => {
          if (
            props?.slug?.includes('list/announcements') &&
            modal.id !== undefined
          ) {
            dispatch(pubsActions.deactivatePublicationRequest(modal.id));
            closeModal();
          }
          if (props?.slug?.includes('list/users') && modal.id !== undefined) {
            dispatch(usersctions.deleteUserRequest(modal.id));
            closeModal();
          }
        },
      },
    };
  };

  const onSelect = (page: number) => {
    setPage(page);
  };

  const handleData = (fieldName: string, value: any) => {
    setData({ ...data, [fieldName]: value } as ListAnnouncementFields);
    dispatch(
      storeActions.listAnnouncement({
        listannouncement: {
          ...data,
          [fieldName]: value,
        },
      })
    );
  };

  const permissionType = React.useCallback((): Record<string, any> => {
    return {
      admin: userStore?.user?.permission?.name === 'admin',
      user: userStore?.user?.permission?.name === 'user',
    };
  }, [userStore?.user?.permission?.name]);

  const { admin } = permissionType();

  return (
    <>
      <BoxMessage
        open={modal.open}
        title={typeMessage()}
        buttons={actionsBoxMessage()}
      />
      <List
        handleData={handleData}
        data={data}
        userName={userStore?.user?.firstName}
        isLogged={!!isLogged}
        permissionType={permissionType()}
        users={userStore?.users}
        cards={pubsStore.publications.map((publication) => ({
          variant: admin ? 'ternary' : 'secondary',
          size: isMobile() ? 'small' : 'normal',
          views: true,
          functionalities: admin ? true : false,
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
        quantity={getQuantity() || 0}
        isMobile={isMobile()}
        {...props}
        onSelect={onSelect}
      />
    </>
  );
};

export default ListContainer;

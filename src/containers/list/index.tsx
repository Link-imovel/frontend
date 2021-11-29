import React from 'react';
import { useRouter } from 'next/router';

import { List } from '@views/list';

import { ListProps } from '@views/list/list.type';

import { useDispatch, useSelector } from 'react-redux';
import { actions as pubsActions } from '@store/ducks/publications';
import { actions as storeActions } from '@store/ducks/store';
import { RootStore } from '@store/store.interface';

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
    BSearch,
  } = props.buttons;
  const router = useRouter();
  const { isMobile } = useMobile();
  const { modal } = useBoxMessage();

  const pubsStore = useSelector((state: RootStore) => state.publication);
  const userStore = useSelector((state: RootStore) => state.user);
  const dispatch = useDispatch();

  const [data, setData] = React.useState<ListAnnouncementFields>();

  const [isLogged, setIsLogged] = React.useState<boolean>();

  React.useEffect(() => {
    setIsLogged(!!userStore?.user?.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const typeMessage = React.useCallback((): string | undefined => {
    if (props?.content?.cards) {
      const publication = pubsStore.publications.find(
        (publication) => publication.id === modal.id
      );
      return `Tem certeza que deseja excluir anúncio de referência: ${publication?.home?.ref}`;
    }
  }, [modal.id, props?.content?.cards, pubsStore.publications]);

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

  BSearch.callback = () => {
    dispatch(pubsActions.getPublicationsRequest({ ...data }));
  };

  BUpdatePerfil.callback = () => {
    router.push('/update-user');
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
      <BoxMessage open={modal.open} title={typeMessage()} />
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
        quantity={pubsStore.publications.length || userStore.users.length}
        isMobile={isMobile()}
        {...props}
      />
    </>
  );
};

export default ListContainer;

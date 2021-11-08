import React from 'react';
import { GetStaticProps } from 'next';

import { ListAnuncementProps } from '@views/listanuncement/listanuncement.type';
import ListAnuncementContainer from '@containers/listanuncement';

const ListAnuncement = (props: ListAnuncementProps): React.ReactElement => (
  <ListAnuncementContainer {...props} />
);

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      user: 'John',
      buttons: {
        BLogo: {},
        BLogin: {},
        BAnuncement: {
          label: 'Anuncios',
        },
        BCreateAnuncement: {
          label: 'Criar anuncio',
        },
        BCreateUser: {
          label: 'Criar usuário',
        },
        BListUsers: {
          label: 'Listar usuário',
        },
        BLogout: {
          label: 'Sair',
        },
        BSettings: {
          label: 'Atualizar Perfil',
        },
      },
      typePermition: 'adm',
      isLogged: true,
    },
  };
};

export default ListAnuncement;

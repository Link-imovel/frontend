import React from 'react';
import { GetStaticProps } from 'next';

import ListUserContainer from '@containers/listuser';
import { ListUserProps } from '@views/listuser/listuser.type';

const ListUser = (props: ListUserProps): React.ReactElement => (
  <ListUserContainer {...props} />
);

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      user: 'John',
      buttons: {
        BLogo: {},
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
      users: [
        {
          id: '1',
          name: 'John Amoedo',
          email: 'johnamoed@gmail.com',
          cresci: '10002015',
          telephone: '(41)99999-9999',
          type: 'Usuario',
        },
        {
          id: '1',
          name: 'John Amoedo',
          email: 'johnamoed@gmail.com',
          cresci: '10002015',
          telephone: '(41)99999-9999',
          type: 'Usuario',
        },
        {
          id: '1',
          name: 'John Amoedo',
          email: 'johnamoed@gmail.com',
          cresci: '10002015',
          telephone: '(41)99999-9999',
          type: 'Usuario',
        },
        {
          id: '1',
          name: 'John Amoedo',
          email: 'johnamoed@gmail.com',
          cresci: '10002015',
          telephone: '(41)99999-9999',
          type: 'Usuario',
        },
        {
          id: '1',
          name: 'John Amoedo',
          email: 'johnamoed@gmail.com',
          cresci: '10002015',
          telephone: '(41)99999-9999',
          type: 'Usuario',
        },
        {
          id: '1',
          name: 'John Amoedo',
          email: 'johnamoed@gmail.com',
          cresci: '10002015',
          telephone: '(41)99999-9999',
          type: 'Usuario',
        },
      ],
    },
  };
};

export default ListUser;

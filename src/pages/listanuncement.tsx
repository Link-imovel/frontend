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
      typePermition: '',
      isLogged: false,
      cards: [
        {
          images: [
            'https://via.placeholder.com/269x143?text=1',
            'https://via.placeholder.com/269x143?text=2',
            'https://via.placeholder.com/269x143?text=3',
          ],
          variant: 'tertiary',
          size: 'normal',
          title: 'A partir de',
          address: 'SQNW 303 BLOCO',
          value: 5000,
          neighborhood: 'Noroeste, Brasilia',
          quantityRoom: 5,
          quantityGarage: 1,
          quantityBathroom: 1,
          quantityViews: 3,
          labelViews: ' views',
          info: 'Apartamento 2 E 3 Quartos no Noroeste - Vivant',
          name: 'John Amoedo',
          phoneNumber: '(41) 99999-9999',
          buttons: {
            BCircleWhatsApp: {},
            BNavigation: {
              typeSize: 'medium',
              label: 'Navigation',
            },
            BContact: {
              label: 'Contatar',
            },
            BEdit: {},
            BDelete: {},
          },
        },
        {
          images: [
            'https://via.placeholder.com/269x143?text=1',
            'https://via.placeholder.com/269x143?text=2',
            'https://via.placeholder.com/269x143?text=3',
          ],
          variant: 'tertiary',
          size: 'normal',
          title: 'A partir de',
          address: 'SQNW 303 BLOCO',
          value: 5000,
          neighborhood: 'Noroeste, Brasilia',
          quantityRoom: 5,
          quantityGarage: 1,
          quantityBathroom: 1,
          quantityViews: 3,
          labelViews: ' views',
          info: 'Apartamento 2 E 3 Quartos no Noroeste - Vivant',
          name: 'John Amoedo',
          phoneNumber: '(41) 99999-9999',
          buttons: {
            BCircleWhatsApp: {},
            BNavigation: {
              typeSize: 'medium',
              label: 'Navigation',
            },
            BContact: {
              label: 'Contatar',
            },
            BEdit: {},
            BDelete: {},
          },
        },
      ],
    },
  };
};

export default ListAnuncement;

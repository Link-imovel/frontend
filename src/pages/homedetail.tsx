import React from 'react';
import { GetStaticProps } from 'next';

import HomeDetailContainer from '@containers/homedetail';
import { HomeDetailProps } from '@views/homedetail/homedetail.type';

const HomeDetail = (props: HomeDetailProps): React.ReactElement => (
  <HomeDetailContainer {...props} />
);

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      title: 'Detalhes do imóvel',
      buttons: {
        BLogo: {},
        BArrowBefore: {
          label: 'Anterior',
        },
        BArrowAfter: {
          label: 'Próximo',
        },
        BGeneric: {
          label: 'Continuar',
        },
      },
      breadCrumb: {
        paths: [
          {
            title: 'Endereço do imóvel',
            url: '/address-imovel',
          },
          {
            title: 'Detalhes do imóvel',
            url: '/detail-imovel',
          },
          {
            title: 'Cliente',
            url: '/form-client',
          },
        ],
      },
    },
  };
};

export default HomeDetail;

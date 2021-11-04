import React from 'react';
import { GetStaticProps } from 'next';

import { ClientProps } from '@views/client/client.type';
import ClientContainer from '@containers/client';

const Address = (props: ClientProps): React.ReactElement => (
  <ClientContainer {...props} />
);

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      title: 'Dados do Cliente',
      buttons: {
        BLogo: {},
        BArrowBefore: {
          label: 'Anterior',
        },
        BGeneric: {
          label: 'Criar Anuncio',
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

export default Address;

import React from 'react';

import HomeContainer from '@containers/home';
import { GetStaticProps } from 'next';
import { HomeProps } from '@views/home/home.type';

const Home = (props: HomeProps): React.ReactElement => (
  <HomeContainer {...props} />
);

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      header: {
        title: 'A SUA FUTURA HOME SE ENCONTRA AQUI.',
        subtitle:
          'Trazendo a maior variadade de imóveis  que se adequa ao seu momento.',
        buttons: {
          BLogo: {},
          BLogin: {},
          BShowImovels: {
            label: 'Ver imóveis',
          },
        },
      },
      footer: {
        label: '@Copyright 2021 link_.com',
        links: [
          { url: '#1', label: '· Privacidade' },
          { url: '#2', label: '· Termos' },
          { url: '#3', label: '· Mapa do site' },
          { url: '#4', label: '· Informações da empresa' },
        ],
      },
    },
  };
};

export default Home;

import React from 'react';
import strapiClient from '@services/strapi.client';
import { wrapper } from '@store/store';

import HomeContainer from '@containers/home';
import { HomeProps } from '@views/home/home.type';

const Home = (props: HomeProps): React.ReactElement => (
  <HomeContainer {...props} />
);

export const getServerSideProps = wrapper.getServerSideProps(
   (store) => async ({ locale, defaultLocale, resolvedUrl }) => {
    const { slug, locale: strapiLocale } = strapiClient.getLocalizedParams(
      resolvedUrl,
      locale || defaultLocale
    );

    try {
      return await strapiClient.getData(slug, strapiLocale);
    } catch (error) {
      return { props: {} };
    }
  }
);

export default Home;

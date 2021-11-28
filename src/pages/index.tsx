import React from 'react';
import strapiClient from '@services/strapi.client';

import { wrapper } from '@store/store';
import { END } from 'redux-saga';
import { actions as pubActions } from '@store/ducks/publications';

import HomeContainer from '@containers/home';
import { HomeProps } from '@views/home/home.type';

const Home = (props: HomeProps): React.ReactElement => (
  <HomeContainer {...props} />
);

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ locale, defaultLocale, resolvedUrl }) => {
      const { slug, locale: strapiLocale } = strapiClient.getLocalizedParams(
        resolvedUrl,
        locale || defaultLocale
      );

      store.dispatch(pubActions.getPublicationsRequest({}));
      store.dispatch(END);
      await store.sagaTask?.toPromise();

      try {
        return await strapiClient.getData(slug, strapiLocale);
      } catch (error) {
        return { props: {} };
      }
    }
);

export default Home;

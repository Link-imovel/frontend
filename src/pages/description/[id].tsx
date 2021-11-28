import React from 'react';
import { GetServerSideProps } from 'next';
import strapiClient from '@services/strapi.client';

import DescriptionContainer from '@containers/description';
import { DesciptionProps } from '@views/description/description.type';

import { wrapper } from '@store/store';
import { END } from 'redux-saga';
import { actions as pubActions } from '@store/ducks/publications';

const Description = (props: DesciptionProps): React.ReactElement => (
  <DescriptionContainer {...props} />
);

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(
    (store) =>
      async ({ resolvedUrl, locale, defaultLocale, params }) => {
        const { slug, locale: strapiLocale } = strapiClient.getLocalizedParams(
          resolvedUrl,
          locale || defaultLocale
        );

        store.dispatch(pubActions.getPublicationRequest(params?.id as string));
        store.dispatch(END);
        await store.sagaTask?.toPromise();

        try {
          return await strapiClient.getData(slug, strapiLocale);
        } catch (error) {
          return { props: {} };
        }
      }
  );

export default Description;

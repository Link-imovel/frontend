import React from 'react';
import strapiClient from '@services/strapi.client';

import { wrapper } from '@store/store';
import { END } from 'redux-saga';
import { actions as pubActions } from '@store/ducks/publications';

import { BoxMessageProvider } from '@hooks/boxmessage';

import { ListProps } from '@views/list/list.type';
import ListContainer from '@containers/list';

const List = (props: ListProps): React.ReactElement => {
  return (
    <BoxMessageProvider>
      <ListContainer {...props} />
    </BoxMessageProvider>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async ({ locale, defaultLocale, resolvedUrl }) => {
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

export default List;

import React from 'react';
import strapiClient from '@services/strapi.client';

import { wrapper } from '@store/store';
import { END } from 'redux-saga';
import { actions as pubActions } from '@store/ducks/publications';
import { actions as userActions } from '@store/ducks/user';

import { BoxMessageProvider } from '@hooks/boxmessage';

import { ListProps } from '@views/list/list.type';
import ListContainer from '@containers/list';

const List = (props: ListProps): React.ReactElement => {
  if (typeof window !== 'undefined') {
    return (
      <BoxMessageProvider>
        <ListContainer {...props} />
      </BoxMessageProvider>
    );
  }
  return <></>;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ locale, defaultLocale, resolvedUrl, req }) => {
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

export default List;

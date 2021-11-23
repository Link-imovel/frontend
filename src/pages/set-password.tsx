import React from 'react';
import strapiClient from '@services/strapi.client';
import { GetServerSideProps } from 'next';

import SetPasswordContainer from '@containers/setpassword';
import { SetPasswordProps } from '@views/setpassword/setpassword.type';

const SetPassword = (props: SetPasswordProps): React.ReactElement => (
  <SetPasswordContainer {...props} />
);

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug, locale } = strapiClient.getLocalizedParams(
    context.resolvedUrl,
    context.locale || context.defaultLocale
  );

  try {
    return await strapiClient.getData(slug, locale, {
      token: context.query['token'],
    });
  } catch (error) {
    return { props: {} };
  }
};

export default SetPassword;

import React from 'react';
import { GetServerSideProps } from 'next';
import strapiClient from '@services/strapi.client';

import AboutContainer from '@containers/about';

import { AboutProps } from '@views/about/about.type';

const About = (props: AboutProps): React.ReactElement => {
  return <AboutContainer {...props} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug, locale } = strapiClient.getLocalizedParams(
    context.resolvedUrl,
    context.locale || context.defaultLocale
  );

  try {
    return await strapiClient.getData(slug, locale);
  } catch (error) {
    return { props: {} };
  }
};

export default About;

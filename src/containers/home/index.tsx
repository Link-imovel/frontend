import React from 'react';

import { Home } from '@views/home';
import { HomeProps } from '@views/home/home.type';

const HomeContainer = (props: HomeProps): React.ReactElement => {
  return <Home {...props} />;
};

export default HomeContainer;

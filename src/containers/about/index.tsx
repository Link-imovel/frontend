import React from 'react';
import { useRouter } from 'next/router';

import { About } from '@views/about';

import { AboutProps } from '@views/about/about.type';

const AboutContainer = (props: AboutProps): React.ReactElement => {
  const { BLogo, BArrowBefore } = props.buttons;

  const router = useRouter();

  BLogo.callback = () => {
    router.push('/');
  };

  BArrowBefore.callback = () => {
    router.push('/');
  };

  return <About {...props} />;
};

export default AboutContainer;

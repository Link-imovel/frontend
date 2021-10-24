import React from 'react';

import { Generic } from '@views/generic';

import { GenericProps } from '@views/generic/generic.type';

const GenericContainer = (props: GenericProps): React.ReactElement => {
  const customProps = { ...props };
  const { BLogo, BArrowBefore, BLogin } = customProps.buttons;

  BLogo.callback = React.useCallback(() => {
    console.log('#1');
  }, []);

  BArrowBefore.callback = React.useCallback(() => {
    console.log('#2');
  }, []);

  BLogin.callback = React.useCallback(() => {
    console.log('#3');
  }, []);

  return <Generic {...customProps} />;
};

export default GenericContainer;

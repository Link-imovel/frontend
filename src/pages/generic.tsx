import React from 'react';

import GenericContainer from '@containers/generic';

import { ButtonsProps } from '@views/generic/generic.type';

import { Logo } from '@components/generics/icons/logo';
import { ArrowBefore } from '@components/generics/icons/arrowbefore';

import { colors } from '@theme/theme/default';

const Generic = (): React.ReactElement => {
  const buttons: ButtonsProps = {
    BLogo: {
      icon: <Logo fill={colors.blackGrey} />,
    },
    BArrowBefore: {
      icon: <ArrowBefore height={20} width={20} />,
      label: 'Anterior',
    },
    BLogin: {
      label: 'Criar',
    },
  };

  return <GenericContainer title="Criar um usuário" buttons={buttons} />;
};

export default Generic;

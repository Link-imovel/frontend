import React from 'react';

import GenericContainer from '@containers/generic';
import { GenericProps } from '@views/generic/generic.type';
import { GetStaticProps, GetStaticPropsContext } from 'next';

const Generic = (props: GenericProps): React.ReactElement => {
  return <GenericContainer {...props} />;
};

export const getStaticPaths = async () => {
  return { paths: ['/create-user', '/update-user'], fallback: false };
};

const getProps = (url?: string) => {
  const props = {
    title: 'Criar um usuário',
    type: 'create',
    buttons: {
      BLogo: {},
      BArrowBefore: {
        label: 'Anterior',
      },
      BLogin: {
        label: 'Criar',
      },
    },
  };

  if (url && url.match(/update/g)) {
    props.title = 'Atualizar dados de um usuário';
    props.buttons.BLogin.label = 'Atualizar';
    props.type = 'update';
  }

  return { props };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext) => {
  return getProps(params?.generic as string);
};

export default Generic;

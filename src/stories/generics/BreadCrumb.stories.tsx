import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BreadCrumb } from '@components/generics/breadcrumb';

export default {
  title: 'Generics/BreadCrumb',
  component: BreadCrumb,
  argTypes: {},
} as ComponentMeta<typeof BreadCrumb>;

const Template: ComponentStory<typeof BreadCrumb> = (args) => (
  <BreadCrumb {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  paths: [
    {
      title: 'Endereço do imóvel',
      url: '/address-imovel',
    },
    {
      title: 'Detalhes do imóvel',
      url: '/detail-imovel',
    },
    {
      title: 'Cliente',
      url: '/form-client',
    },
  ],
};

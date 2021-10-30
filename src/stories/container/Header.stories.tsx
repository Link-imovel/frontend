import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from '@components/container/header';

export default {
  title: 'Container/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'A SUA FUTURA HOME SE ENCONTRA AQUI.',
  subtitle:
    'Trazendo a maior variadade de imóveis  que se adequa ao seu momento.',
  buttons: {
    BLogo: {
      callback: () => console.log('#1'),
    },
    BLogin: {
      callback: () => console.log('#2'),
    },
    BShowImovels: {
      label: 'Ver imóveis',
      callback: () => console.log('#3'),
    },
  },
};

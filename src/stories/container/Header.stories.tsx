import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from '@components/container/header';
import { Link } from '@components/generics/icons/link';

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
  icon: <Link />,
  callback: {
    logo: () => console.log('#1'),
    login: () => console.log('#2'),
    showImovels: () => console.log('#3'),
  },
  labelShowImovels: 'Ver imóveis',
};

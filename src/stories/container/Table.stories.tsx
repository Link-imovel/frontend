import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Table } from '@components/generics/table';

export default {
  title: 'Generics/Table',
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  users: [
    {
      id: '1',
      name: 'John Amoedo',
      email: 'johnamoed@gmail.com',
      cresci: '10002015',
      telephone: '(41)99999-9999',
      type: 'Usuario',
    },
  ],
};

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
      firstName: 'John',
      lastName: 'Amoedo',
      email: 'johnamoed@gmail.com',
      creci: '10002015',
      phone: '(41)99999-9999',
      isActive: true,
      registry: '110.550.129-90',
      birthday: '12/18/1998',
    },
    {
      id: '2',
      firstName: 'John',
      lastName: 'Amoedo',
      email: 'johnamoed@gmail.com',
      creci: '10002015',
      phone: '(41)99999-9999',
      isActive: true,
      registry: '110.550.129-90',
      birthday: '12/18/1998',
    },
    {
      id: '3',
      firstName: 'John',
      lastName: 'Amoedo',
      email: 'johnamoed@gmail.com',
      creci: '10002015',
      phone: '(41)99999-9999',
      isActive: false,
      registry: '110.550.129-90',
      birthday: '12/18/1998',
    },
  ],
};

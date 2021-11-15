import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Pagination } from '@components/generics/pagination';

export default {
  title: 'Generics/Pagination',
  component: Pagination,
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => (
  <Pagination {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  items: [
    {
      id: '1',
      label: '1',
    },
  ],
};

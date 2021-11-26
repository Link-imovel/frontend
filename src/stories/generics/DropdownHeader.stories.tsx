import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DropdownHeader } from '@components/generics/dropdownheader';

export default {
  title: 'Generics/DropdownHeader',
  component: DropdownHeader,
} as ComponentMeta<typeof DropdownHeader>;

const Template: ComponentStory<typeof DropdownHeader> = (args) => (
  <DropdownHeader {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  user: 'John',
};

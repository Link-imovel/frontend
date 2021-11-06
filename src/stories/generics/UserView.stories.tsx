import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { UserView } from '@components/generics/userview';

export default {
  title: 'Generics/UserView',
  component: UserView,
} as ComponentMeta<typeof UserView>;

const Template: ComponentStory<typeof UserView> = (args) => (
  <UserView {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  user: 'John',
};

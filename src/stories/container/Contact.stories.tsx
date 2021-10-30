import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Contact } from '@components/container/contact';

export default {
  title: 'Container/Contact',
  component: Contact,
  argTypes: {},
} as ComponentMeta<typeof Contact>;

const Template: ComponentStory<typeof Contact> = () => <Contact />;

export const Primary = Template.bind({});
Primary.args = {};

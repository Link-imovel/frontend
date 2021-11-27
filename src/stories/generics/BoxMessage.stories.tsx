import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BoxMessage } from '@components/generics/boxmessage';

export default {
  title: 'Generics/BoxMessage',
  component: BoxMessage,
  argTypes: {},
} as ComponentMeta<typeof BoxMessage>;

const Template: ComponentStory<typeof BoxMessage> = (args) => (
  <BoxMessage {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  open: true,
  title: 'Tem certeza que deseja excluir anúncio de referência: ZL234.',
};

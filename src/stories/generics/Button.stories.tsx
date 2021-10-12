import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '@components/generics/button';
import { WhatsApp } from '@components/generics/icons/whatsapp';

export default {
  title: 'generics/button',
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  label: 'Entrar',
  size: 'medium',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  label: 'Entrar',
  size: 'medium',
  background: 'transparent',
};

export const Large = Template.bind({});
Large.args = {
  variant: 'primary',
  label: 'Entrar',
  size: 'large',
};

export const ButtonWhatsApp = Template.bind({});
ButtonWhatsApp.args = {
  variant: 'primary',
  label: 'Contato por whatsapp',
  size: 'large',
  background: '#32CD30',
  icon: <WhatsApp height={17} width={17} fill="#FFFFFF" />,
  iconReverse: true,
  onClick: () => console.log('clicked'),
};

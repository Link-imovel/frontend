import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Footer } from '@components/container/footer';

export default {
  title: 'Container/Footer',
  component: Footer,
  argTypes: {},
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: '@Copyright 2021 link_.com',
  links: [
    { url: '#1', label: '· Privacidade' },
    { url: '#2', label: '· Termos' },
    { url: '#3', label: '· Mapa do site' },
    { url: '#4', label: '· Informações da empresa' },
  ],
};

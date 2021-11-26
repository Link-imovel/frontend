import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Modal } from '@components/container/modal';

export default {
  title: 'Container/Modal',
  component: Modal,
  argTypes: {},
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  showModal: true,
  backgroundColor: '#000',
};

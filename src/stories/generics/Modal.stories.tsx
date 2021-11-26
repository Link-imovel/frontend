import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Modal } from '@components/generics/modal';

export default {
  title: 'Generics/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  showModal: true,
  images: [
    'https://via.placeholder.com/269x143?text=1',
    'https://via.placeholder.com/269x143?text=2',
    'https://via.placeholder.com/269x143?text=3',
    'https://via.placeholder.com/269x143?text=4',
    'https://via.placeholder.com/269x143?text=5',
    'https://via.placeholder.com/269x143?text=6',
    'https://via.placeholder.com/269x143?text=7',
  ],
};

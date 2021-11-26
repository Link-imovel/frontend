import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Dropdown } from '@components/generics/dropdown';

export default {
  title: 'generics/Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'Title',
  disabled: true,
  options: [
    {
      id: 'mr',
      label: 'MR',
      selected: false,
    },
    {
      id: 'mrs',
      label: 'MRS',
      selected: false,
    },
    {
      id: 'ms',
      label: 'MS',
      selected: false,
    },
    {
      id: 'master',
      label: 'MASTER',
      selected: false,
    },
    {
      id: 'miss',
      label: 'MISS',
      selected: true,
    },
  ],
};

export const WithoutSelectedOption = Template.bind({});
WithoutSelectedOption.args = {
  label: 'Title',
  options: [
    {
      id: 'mr',
      label: 'MR',
      selected: false,
    },
    {
      id: 'mrs',
      label: 'MRS',
      selected: false,
    },
    {
      id: 'ms',
      label: 'MS',
      selected: false,
    },
    {
      id: 'master',
      label: 'MASTER',
      selected: false,
    },
    {
      id: 'miss',
      label: 'MISS',
      selected: false,
    },
  ],
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  label: 'Title',
  placeholder: 'Select one of these options',
  options: [
    {
      id: 'mr',
      label: 'MR',
      selected: false,
    },
    {
      id: 'mrs',
      label: 'MRS',
      selected: false,
    },
    {
      id: 'ms',
      label: 'MS',
      selected: false,
    },
    {
      id: 'master',
      label: 'MASTER',
      selected: false,
    },
    {
      id: 'miss',
      label: 'MISS',
      selected: false,
    },
  ],
};

export const WithEmptyPlaceholder = Template.bind({});
WithEmptyPlaceholder.args = {
  label: 'Title',
  placeholder: '',
  options: [
    {
      id: 'mr',
      label: 'MR',
      selected: false,
    },
    {
      id: 'mrs',
      label: 'MRS',
      selected: false,
    },
    {
      id: 'ms',
      label: 'MS',
      selected: false,
    },
    {
      id: 'master',
      label: 'MASTER',
      selected: false,
    },
    {
      id: 'miss',
      label: 'MISS',
      selected: false,
    },
  ],
};

export const WithDefaultValue = Template.bind({});
WithDefaultValue.args = {
  label: 'Title',
  selectedValue: 'MASTER',
  disabled: false,
  options: [
    {
      id: 'mr',
      label: 'MR',
    },
    {
      id: 'mrs',
      label: 'MRS',
    },
    {
      id: 'ms',
      label: 'MS',
    },
    {
      id: 'master',
      label: 'MASTER',
    },
    {
      id: 'miss',
      label: 'MISS',
    },
  ],
};

export const NoOptions = Template.bind({});
NoOptions.args = {
  label: 'Title',
};

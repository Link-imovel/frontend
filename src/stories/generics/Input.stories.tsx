import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from '@components/generics/input';
import { Calendar } from '@components/generics/icons/calendar';

export default {
  title: 'generics/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Email = Template.bind({});
Email.args = {
  id: 'email',
  label: 'Email',
  type: 'text',
  name: 'email',
  placeholder: 'Enter your email',
  validators: [
    {
      type: 'Required',
      message: 'Field is required',
    },
    {
      type: 'Match',
      message: 'Please, provide a valid e-mail address.',
      match: (value) => {
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return !value || !!regex.test(value as string);
      },
    },
  ],
  onChange: () => console.log('change'),
  onBlur: () => console.log('blur'),
  onValidation: (status) => {
    console.log('status: ', status);
  },
};

export const Name = Template.bind({});
Name.args = {
  id: 'name',
  label: 'Name',
  type: 'text',
  name: 'name',
  placeholder: 'Enter your name',
  validateOnChange: false,
  validators: [
    {
      type: 'Required',
      message: 'Field is required',
    },
  ],
  onChange: () => console.log('change'),
  onBlur: () => console.log('blur'),
};

export const Password = Template.bind({});
Password.args = {
  id: 'password',
  label: 'Password',
  type: 'password',
  name: 'password',
  placeholder: 'Enter your password',
  validateOnChange: false,
  validators: [
    {
      type: 'Required',
      message: 'Field is required',
    },
  ],
  onChange: () => console.log('change'),
  onBlur: () => console.log('blur'),
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  id: 'birth-date',
  label: 'Birth Date',
  type: 'text',
  name: 'birth-date',
  placeholder: 'Enter your date of birth',
  icon: <Calendar height={20} width={20} />,
  validators: [
    {
      type: 'Required',
      message: 'Date of birth is required',
    },
  ],
  onChange: () => console.log('change'),
  onBlur: () => console.log('blur'),
};

export const NoValidationOnChange = Template.bind({});
NoValidationOnChange.args = {
  id: 'email',
  label: 'Email',
  type: 'text',
  name: 'email',
  placeholder: 'Enter your email',
  validateOnChange: false,
  validators: [
    {
      type: 'Required',
      message: 'Field is required',
    },
    {
      type: 'Match',
      message: 'Please, provide a valid e-mail address.',
      match: (value) => {
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return !value || !!regex.test(value as string);
      },
    },
  ],
  onChange: () => console.log('change'),
  onBlur: () => console.log('blur'),
};

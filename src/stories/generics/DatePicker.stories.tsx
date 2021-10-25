import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DatePicker } from '@components/generics/datepicker';

export default {
  title: 'Generics/DatePicker',
  component: DatePicker,
} as ComponentMeta<typeof DatePicker>;

const Template: ComponentStory<typeof DatePicker> = (args) => (
  <DatePicker {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  selectedDate: '09-02-2021',
  minDate: 1630403721598,
  maxDate: 1635587721597,
  startDateAt: 1630403721598,
  inline: false,
  showResetButton: true,
  onSelect: (value) => console.log(value),
};

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DatePickerInput } from '@components/generics/datepicker';

export default {
  title: 'Generics/DatePickerInput',
  component: DatePickerInput,
} as ComponentMeta<typeof DatePickerInput>;

const Template: ComponentStory<typeof DatePickerInput> = (args) => (
  <DatePickerInput {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  selectedDate: '10-10-1990',
  label: 'Selecione a data',
  name: 'Exemplo',
  validators: [
    {
      type: 'NotBlank',
      message: 'A data não pode estar em branco.',
    },
    {
      type: 'Required',
      message: 'A data é necessário.',
    },
    {
      type: 'Match',
      message: 'Por favor digite uma data de nascimento válida.',
      match: (value) => {
        return (
          !value ||
          !!(value as string).match(
            /^[0-9]{2}([/]|[-])[0-9]{2}([/]|[-])[0-9]{4}$/
          )
        );
      },
    },
  ],
  onValidation: (status) => console.log('Validation status: ', status),
  handleValue: (val: string) => console.log('handleValue >>> ', val),
};

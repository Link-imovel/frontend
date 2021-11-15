import { DropdownOption } from '@components/generics/dropdown/dropdown.type';

const values: DropdownOption[] = [
  {
    id: '1',
    label: '1',
    selected: false,
  },
  {
    id: '2',
    label: '2',
    selected: false,
  },
  {
    id: '3',
    label: '3',
    selected: false,
  },
  {
    id: '4',
    label: '4',
    selected: false,
  },
  {
    id: '5',
    label: '5',
    selected: false,
  },
  {
    id: '6',
    label: '6',
    selected: false,
  },
  {
    id: '7',
    label: '7',
    selected: false,
  },
  {
    id: '8',
    label: '8',
    selected: false,
  },
  {
    id: '9',
    label: '9',
    selected: false,
  },
];

const options = {
  bedroom: [...values],
  bathroom: [...values],
  laudry: [...values],
  livingroom: [...values],
  kitchen: [...values],
  garage: [...values],
  type: [
    {
      id: 'tpAppartament',
      label: 'Apartamento',
      selected: false,
    },
    {
      id: 'tpHome',
      label: 'Casa',
      selected: false,
    },
  ],
};

export { options };

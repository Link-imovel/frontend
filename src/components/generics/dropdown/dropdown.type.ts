import React from 'react';

interface DropdownOption {
  id: string;
  label: string;
  selected?: boolean;
}

interface OpenStatusProps {
  isOpen: boolean;
  disabled?: boolean;
  hasContent?: boolean;
}

interface DropdownListItemProps {
  isSelected: boolean;
}

interface DropdownProps {
  label: string;
  placeholder?: string;
  options?: Array<DropdownOption>;
  listStyle?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
  className?: string;
  disabled?: boolean;
  onSelect?: (opt: DropdownOption) => void;
}

export type {
  DropdownOption,
  DropdownProps,
  OpenStatusProps,
  DropdownListItemProps,
};

import React from 'react';

interface DropdownOption {
  id: string;
  label: string;
  selected?: boolean;
}

interface OpenStatusProps {
  isOpen?: boolean;
  disabled?: boolean;
  hasContent?: boolean;
}

interface DropdownListItemProps {
  isSelected: boolean;
}

interface DropdownProps extends OpenStatusProps {
  label?: string;
  placeholder?: string;
  radius?: 'none' | 'square' | 'middleSquare';
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

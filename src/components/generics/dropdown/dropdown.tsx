import React from 'react';

import * as S from './dropdown.style';
import { DropdownOption, DropdownProps } from './dropdown.type';

const Dropdown = ({
  label,
  radius,
  onSelect,
  containerStyle,
  listStyle,
  options = [],
  placeholder,
  className,
  disabled,
}: DropdownProps): React.ReactElement => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState<DropdownOption>(
    {} as DropdownOption
  );

  React.useEffect(() => {
    if (!isOpen) return;

    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }, [isOpen]);

  React.useEffect(() => {
    document.addEventListener('mousedown', toggle);
    if (!options.length) {
      return () => {
        document.removeEventListener('mousedown', toggle);
      };
    }

    if (typeof placeholder === 'undefined') {
      setSelectedOption(options.filter((o) => o.selected)[0] || options[0]);
    }

    return () => {
      document.removeEventListener('mousedown', toggle);
    };
  }, [options, placeholder]);

  const toggle = (e: MouseEvent): void => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  const getOption = (opt: DropdownOption, idx: number): React.ReactElement => (
    <S.DropdownListItem
      id={opt.id}
      key={opt.id}
      style={containerStyle}
      isSelected={opt.id === selectedOption.id}
      onClick={() => {
        setSelectedOption(options[idx]);
        onSelect && onSelect(options[idx]);
      }}
    >
      {opt.label}
    </S.DropdownListItem>
  );

  return (
    <S.ContainerWrapper>
      <S.DropdownContainer
        ref={ref}
        disabled={disabled}
        isOpen={!!isOpen}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        style={containerStyle}
        className={className}
        radius={radius}
      >
        {label ? <S.Label>{label}</S.Label> : undefined}
        <S.DropdownInput isOpen={!!isOpen}>
          <S.DropdownInputLabel>
            {!!placeholder && Object.keys(selectedOption).length === 0
              ? placeholder
              : selectedOption.label}
          </S.DropdownInputLabel>
          <S.StyledArrowDown />
        </S.DropdownInput>

        <S.DropdownList
          hasContent={!!options.length}
          isOpen={!!isOpen}
          style={listStyle}
        >
          {options.length && options.map(getOption)}
        </S.DropdownList>
      </S.DropdownContainer>
    </S.ContainerWrapper>
  );
};

export { Dropdown };

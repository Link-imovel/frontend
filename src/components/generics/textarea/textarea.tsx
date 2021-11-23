import React from 'react';

import * as S from './textarea.style';
import { TextAreaProps } from './textarea.type';

const TextArea = ({
  withBorder,
  placeholder,
  onChange,
  value,
}: TextAreaProps): React.ReactElement => {
  return (
    <S.TextArea
      withBorder={withBorder}
      placeholder={placeholder}
      onChange={onChange}
    >
      {value}
    </S.TextArea>
  );
};

export { TextArea };

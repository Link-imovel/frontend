import { ChangeEventHandler } from 'react';

interface TextAreaProps {
  withBorder: boolean;
  placeholder?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
}

export type { TextAreaProps };

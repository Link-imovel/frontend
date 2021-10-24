import { ChangeEventHandler } from 'react';

interface TextAreaProps {
  withBorder: boolean;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
}

export type { TextAreaProps };

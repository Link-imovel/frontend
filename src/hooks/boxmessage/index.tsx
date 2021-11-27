import React from 'react';

import { BoxMessageContext, BoxMessageProvider } from './boxmessage';
import { BoxMessageContextData } from './boxmessage.type';

const useBoxMessage = (): BoxMessageContextData => {
  const context = React.useContext(BoxMessageContext);
  if (typeof context === 'undefined') {
    throw new Error('useBreadcrumb must be used within a BreadcrumbProvider');
  }
  return context;
};

export { useBoxMessage, BoxMessageProvider };

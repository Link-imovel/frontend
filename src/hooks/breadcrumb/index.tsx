import React from 'react';

import { BreadCrumbContext } from '..';
import { BreadCrumbContextData } from './breadcrumb.type';

export { BreadCrumbContext, BreadCrumbProvider } from './breadcrumb';

const useBreadcrumb = (): BreadCrumbContextData => {
  const context = React.useContext(BreadCrumbContext);
  if (!!context) {
    throw new Error('useBreadcrumb must be used within a BreadcrumbProvider');
  }
  return context;
};

export { useBreadcrumb };

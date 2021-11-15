import React from 'react';

import { BreadCrumbContext, BreadCrumbProvider } from './breadcrumb';
import { BreadCrumbContextData } from './breadcrumb.type';

const useBreadcrumb = (): BreadCrumbContextData => {
  const context = React.useContext(BreadCrumbContext);
  if (!!context) {
    throw new Error('useBreadcrumb must be used within a BreadcrumbProvider');
  }
  return context;
};

export { useBreadcrumb, BreadCrumbProvider };

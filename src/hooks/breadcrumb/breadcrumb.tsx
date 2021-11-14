import React from 'react';

import { BreadCrumbContextData, PathProps } from './breadcrumb.type';

const BreadCrumbContext = React.createContext<BreadCrumbContextData>(
  {} as BreadCrumbContextData
);

const BreadCrumbProvider = (children: React.ReactNode): React.ReactElement => {
  const [paths, setPaths] = React.useState<PathProps[]>([]);

  const next = React.useCallback(
    (props: PathProps) => {
      setPaths([...paths, { ...props }]);
    },
    [paths]
  );

  const previus = React.useCallback(() => {
    const currentPaths = paths;
    currentPaths.pop();
    setPaths([...currentPaths]);
  }, [paths]);

  return (
    <BreadCrumbContext.Provider value={{ paths, next, previus }}>
      {children}
    </BreadCrumbContext.Provider>
  );
};

export { BreadCrumbContext, BreadCrumbProvider };

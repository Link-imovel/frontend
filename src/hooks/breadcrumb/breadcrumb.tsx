import React from 'react';

import {
  BreadCrumbContextData,
  BreadCrumbProps,
  PathProps,
} from './breadcrumb.type';

const BreadCrumbContext = React.createContext<BreadCrumbContextData>(
  {} as BreadCrumbContextData
);

const BreadCrumbProvider = ({
  children,
}: BreadCrumbProps): React.ReactElement => {
  const [paths, setPaths] = React.useState<PathProps[]>([]);

  const next = React.useCallback(
    (props: PathProps) => {
      if (paths.find(({ url }) => url === props.url)) {
        return;
      }
      setPaths([...paths, { ...props }]);
    },
    [paths]
  );

  const previous = React.useCallback(() => {
    const currentPaths = paths;
    currentPaths.pop();
    setPaths([...currentPaths]);
  }, [paths]);

  return (
    <BreadCrumbContext.Provider value={{ paths, next, previous }}>
      {children}
    </BreadCrumbContext.Provider>
  );
};

export { BreadCrumbContext, BreadCrumbProvider };

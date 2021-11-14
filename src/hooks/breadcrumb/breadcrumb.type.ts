import React from 'react';

interface PathProps {
  title: string;
  url?: string;
}

interface BreadCrumbContextData {
  paths: PathProps[];
  next: (props: PathProps) => void;
  previous: () => void;
}

interface BreadCrumbProps {
  children?: React.ReactElement | React.ReactElement[] | string;
}

export type { BreadCrumbContextData, BreadCrumbProps, PathProps };

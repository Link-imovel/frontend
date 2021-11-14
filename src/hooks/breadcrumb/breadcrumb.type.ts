interface PathProps {
  title: string;
  url?: string;
}

interface BreadCrumbContextData {
  paths: PathProps[];
  next: (props: PathProps) => void;
  previus: () => void;
}

export type { BreadCrumbContextData, PathProps };

interface PathProps {
  title: string;
  url?: string;
}

interface BreadCrumbProps {
  paths: PathProps[];
}

export type { BreadCrumbProps };

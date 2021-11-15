interface ItemProps {
  id: string;
  label: string;
  selected?: boolean;
}

interface PaginationProps {
  items?: Array<ItemProps>;
}

export type { ItemProps, PaginationProps };

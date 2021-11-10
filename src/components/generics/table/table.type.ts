interface UserProps {
  id: string;
  name: string;
  email: string;
  cresci: string;
  telephone: string;
  type: string;
}

interface TableProps {
  users: UserProps[];
}

export type { TableProps, UserProps };

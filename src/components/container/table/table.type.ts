interface UserProps {
  id: string;
  name: string;
  email: string;
  cresci: string;
  telephone: string;
  type: string;
}

export type TableProps = {
  users: UserProps[];
};

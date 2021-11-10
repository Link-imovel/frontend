type KeysType<T, J> = {
  [P in keyof T]: J;
};
interface UserFields {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  mobile: string;
  registry: string;
  creci: string;
  birthday: string;
}

interface CreateUser {
  user: UserFields;
  valid: KeysType<UserFields, boolean>;
}

interface Store {
  createUser: CreateUser;
}

export type { Store, UserFields, CreateUser };

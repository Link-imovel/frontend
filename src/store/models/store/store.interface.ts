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

interface Store {
  user?: UserFields;
}

export type { Store, UserFields };

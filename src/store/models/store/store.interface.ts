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

interface AddressFields {
  street: string;
  street2: string;
  number: string;
  neighbourhood: string;
  city: string;
  state: string;
  zipcode: string;
  ibge: string;
}

interface ClientFields {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  mobile: string;
  registry: string;
}

interface HomeDetailFields {
  totalArea: string;
  constructionYear: string;
  ref: string;
  value: string;
}

interface CreateUser {
  user: UserFields;
  valid: KeysType<UserFields, boolean>;
}

interface CreateAddress {
  address: AddressFields;
  valid: KeysType<AddressFields, boolean>;
}

interface CreateClient {
  client: ClientFields;
  valid: KeysType<ClientFields, boolean>;
}

interface CreateHomeDetail {
  homedetail: HomeDetailFields;
  valid: KeysType<HomeDetailFields, boolean>;
}

interface LoginFields {
  email: string;
  password: string;
}
interface Login {
  user: LoginFields;
  valid: KeysType<LoginFields, boolean>;
}

interface Store {
  createUser: CreateUser;
  createAddress: CreateAddress;
  createClient: CreateClient;
  createHomeDetail: CreateHomeDetail;
  login: Login;
}

export type {
  Store,
  UserFields,
  CreateUser,
  AddressFields,
  CreateAddress,
  ClientFields,
  CreateClient,
  HomeDetailFields,
  CreateHomeDetail,
  LoginFields,
  Login,
};

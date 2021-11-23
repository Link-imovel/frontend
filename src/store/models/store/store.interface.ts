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
  zip: string;
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

interface HomeDetailImageField {
  image: string;
}

interface HomeDetailFields {
  title: string;
  totalArea: string;
  buildAt: string;
  ref: string;
  value: string;
  room: string;
  bedroom: string;
  bathroom: string;
  kitchen: string;
  garage: string;
  serviceArea: string;
  description: string;
  type: string;
  images: HomeDetailImageField[];
}

interface SetPasswordFields {
  newPassword: string;
  samePassword: string;
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

interface CreateSetPassword {
  setpassword: SetPasswordFields;
  valid: KeysType<SetPasswordFields, boolean>;
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
  createSetPassword: CreateSetPassword;
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
  HomeDetailImageField,
  HomeDetailFields,
  CreateHomeDetail,
  SetPasswordFields,
  CreateSetPassword,
  LoginFields,
  Login,
};

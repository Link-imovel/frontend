import { Publication } from '../publications/publications.interface';

interface UserAuth {
  access_token?: string;
  user: User;
}

interface Permission {
  id: string;
  name: string;
  createdAt?: string;
  updatedAt?: string;
}

interface User {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  registry: string;
  phone?: string;
  mobile?: string;
  creci?: string;
  birthday: string;
  permissionLevel?: string;
  permissionType?: string;
  isActive?: boolean;
  createdAt?: string;
  updatedAt?: string;
  publication?: Publication[];
  permission?: Permission;
}

interface UpdateUser {
  id: string;
  data: User;
}

interface Login {
  email: string;
  password: string;
}

interface SetPassword {
  password: string;
  confirmPassword: string;
  token: string;
}

interface UserStore {
  access_token?: string;
  user: User;
  users: User[];
}

export type { User, UserAuth, UserStore, Login, SetPassword, UpdateUser };

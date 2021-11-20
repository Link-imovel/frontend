import { Publication } from '../publications/publications.interface';

interface UserAuth {
  access_token?: string;
  user: User;
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
  isActive?: boolean;
  createdAt?: string;
  updatedAt?: string;
  publication?: Publication[];
}

interface Login {
  email: string;
  password: string;
}

interface UserState {
  access_token?: string;
  user: UserAuth;
  users: User[];
}

export type { User, UserAuth, UserState, Login };

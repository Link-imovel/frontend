interface User {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  birthday: Date;
  permissionLevel?: string;
}

interface UserState {
  user: User;
  users: User[];
}

export type { User, UserState };

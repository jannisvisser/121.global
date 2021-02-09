import { UserRole } from '../auth/user-role.enum';

export class UserModel {
  token: string;
}

export class User {
  email: string;
  roles: UserRole[];
  role?: string | 'aidworker'; // To support 'legacy' users
}

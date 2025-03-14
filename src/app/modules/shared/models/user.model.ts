import { UserGroup } from '../enums/user-group';

export interface User {
  email: string;
  email_verified: boolean;
  family_name: string;
  given_name: string;
  name: string;
  preferred_username: string;
  sub: string;
  groups: UserGroup[];
}

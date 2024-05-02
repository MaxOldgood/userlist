export interface User {
  id: number;
  creationDate: string;
  avatar?: string;
  lastName: string;
  firstName: string;
  secondName?: string;
  email?: string;
  about?: string;
}

export interface UsersState {
  userList: User[];
  selectedUsers: number[];
}

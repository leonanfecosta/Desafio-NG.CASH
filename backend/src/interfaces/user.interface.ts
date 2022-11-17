export interface IRegisterUser {
  username: string;
  password: string;
}

export interface IUser extends IRegisterUser {
  id: number;
  accountId: string;
}

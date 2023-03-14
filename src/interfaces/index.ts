export interface IProduct {
  id?: number,
  name: string,
  amount: string,
  orderId?: number,
}

export interface IUser {
  password?: string,
  id?: number
  username: string,
  vocation?: string,
  level?: number,
}

export interface IUserLogin {
  username: string,
  password: string,
}

export interface IUserToken {
  id?: number,
  username: string,
}
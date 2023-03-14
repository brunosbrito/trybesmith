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
  vocation: string,
  level: number,
}
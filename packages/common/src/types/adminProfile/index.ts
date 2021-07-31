export interface IAdmin {
  name: string;
  username: string;
  phone: string;
  email: string;
  avatar: string;
  verified?: boolean;
  password?: string;
  level?: number;
}
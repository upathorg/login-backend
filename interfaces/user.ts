export interface IUser {
  id: number;
  first_name: string;
  last_name: string;
  email_address: string;
  password: string;
  created_at?: Date;
  updated_at?: Date;
}

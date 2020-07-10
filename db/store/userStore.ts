import { IUser } from '../../interfaces/user';
import Store from './store';

export class UserStore extends Store<IUser> {
  constructor() {
    super('users');
  }
}

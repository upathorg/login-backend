import { IUser } from '../../interfaces/user';
import { UserStore } from '../../db/store/userStore';

export default class UserService {
  private userStore: UserStore;

  constructor() {
    this.userStore = new UserStore();
  }

  async getUser(id: number): Promise<IUser> {
    const user = await this.userStore.getById(id);

    if (!user) throw new Error(`User ${id} does not exist`);

    return user;
  }
}

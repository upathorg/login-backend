import { Resolver, Query, ObjectType, Field, Arg, ID } from 'type-graphql';
import { IUser } from '../../interfaces/user';
import UserService from '../../services/user/UserService';

@ObjectType()
export class User {
  @Field(() => ID)
  id: number;

  @Field()
  first_name: string;

  @Field()
  last_name: string;

  @Field()
  email_address: string;

  @Field()
  password: string;

  @Field({ nullable: true })
  created_at: Date;

  @Field({ nullable: true })
  updated_at: Date;
}

@Resolver()
export class UserResolver {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  @Query(() => User)
  async getUser(@Arg('id') id: number): Promise<IUser> {
    return await this.userService.getUser(id);
  }
}

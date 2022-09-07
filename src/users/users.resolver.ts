import { UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UserResponse } from './dto/user.response';
import { User } from './schema/user.schema';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private userService: UsersService) {}

  @Query(() => [UserResponse])
  @UseGuards(JwtAuthGuard)
  // @Context() context <- can be used with this UseGuards
  async users() {
    return this.userService.findAll();
  }
}

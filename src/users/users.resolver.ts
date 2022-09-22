import { UseGuards } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UserResponse } from './dto/user.response';
import { User } from './entities/user.entity';
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

  @Query(() => UserResponse)
  @UseGuards(JwtAuthGuard)
  async user(@Args('email') email: string) {
    return this.userService.getUser(email);
  }
}

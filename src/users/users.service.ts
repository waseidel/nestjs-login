import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUser } from './dto/create-user';
import { UserResponse } from './dto/user.response';
import { User, UserDocument } from './schema/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUser: CreateUser): Promise<User> {
    const createdUser = new this.userModel(createUser);
    return createdUser.save();
  }

  async findAll(): Promise<UserResponse[]> {
    return this.userModel.find();
  }

  async getUser(email: string): Promise<User | undefined> {
    return await this.userModel.findOne({ email: email });
  }
}
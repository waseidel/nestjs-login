import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUser } from './dto/create-user';
import { UserResponse } from './dto/user.response';
import { User, UserDocument } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUser: CreateUser): Promise<User> {
    const createdUser = new this.userModel(createUser);
    const savedUser = await createdUser.save();
    return savedUser;
  }

  async findAll(): Promise<UserResponse[] | undefined> {
    return this.userModel.find();
  }

  async findById(id: User): Promise<User | undefined> {
    return await this.userModel.findById(id);
  }

  async getUser(email: string): Promise<User | undefined> {
    return await this.userModel.findOne({ email: email });
  }

  async getUsers(): Promise<User[] | undefined> {
    return await this.userModel.find({});
  }
}

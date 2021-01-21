import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from '../dtos/create/create-user.dto';
import { User, UserDocument } from './../schemas/user.schema';
@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private userModel: Model<UserDocument>, // @InjectConnection() private connection: Connection,
  ) {}

  async create(data: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(data);
    return createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
}

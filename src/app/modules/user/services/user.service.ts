import { User, UserDocument } from './../schemas/user.schema';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dtos/create/create-user.dto';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectConnection() private connection: Connection,
  ) {}

  async create(data: CreateUserDto): Promise<User> {
    const createdCat = new this.userModel(data);
    return createdCat.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
}

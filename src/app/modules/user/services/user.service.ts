import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { insertDataPlaceholder, successPlaceholder } from 'src/app/utils';
import { CreateUserDto } from '../dtos/create/create-user.dto';
import { User, UserDocument } from './../schemas/user.schema';
@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private userModel: Model<UserDocument>, // @InjectConnection() private connection: Connection,
  ) {}

  async create(data: CreateUserDto): Promise<any> {
    const createdUser = new this.userModel(data);
    const user = await createdUser.save();
    return insertDataPlaceholder(user);
  }

  async findAll(): Promise<any> {
    const users = await this.userModel.find().exec();
    return successPlaceholder('Get All Success', users);
  }

  async findOne(id: any): Promise<any> {
    const user = await this.userModel.findById(id);
    return successPlaceholder('Get Success', user);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserAlreadyExistErrorCode } from 'src/app/constants/errorCode.constant';
import { UserAlreadyExistErrorMessage } from 'src/app/constants/errorMessage.constant';
import { AlreadyExistError } from 'src/app/errors';
import {
  initError,
  insertDataPlaceholder,
  successPlaceholder,
} from 'src/app/utils';
import { CreateUserDto } from '../dtos/create/create-user.dto';
import { UpdateUserDto } from '../dtos/update/update-user.dto';
import { ParamsDto } from './../../../commonDtos/params.id.dto';
import { ApiError } from './../../../errors/apiException.error';
import { UserDocument } from './../schemas/user.schema';
@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private userModel: Model<UserDocument>, // @InjectConnection() private connection: Connection,
  ) {}

  async create(data: CreateUserDto): Promise<any> {
    try {
      const dupUser = await this.userModel.findOne({ email: data.email });
      if (dupUser) {
        throw new AlreadyExistError(
          initError(UserAlreadyExistErrorMessage, UserAlreadyExistErrorCode),
        );
      }
      const createdUser = new this.userModel(data);
      const user = await createdUser.save();
      return insertDataPlaceholder(user);
    } catch (error) {
      throw new ApiError(error);
    }
  }

  async findAll(): Promise<any> {
    try {
      const users = await this.userModel.find().exec();
      return successPlaceholder('Get All Success', users);
    } catch (error) {
      throw new ApiError(error);
    }
  }

  async findOne(id: any): Promise<any> {
    try {
      const user = await this.userModel.findById(id);
      return successPlaceholder('Get Success', user);
    } catch (error) {
      throw new ApiError(error);
    }
  }

  async update(params: ParamsDto, data: UpdateUserDto): Promise<any> {
    try {
      await this.userModel
        .update(
          { _id: params.id },
          {
            $set: data,
          },
        )
        .exec();
      const user = await this.userModel.findById(params.id);
      return successPlaceholder('Updated Success', user);
    } catch (error) {
      throw new ApiError(error);
    }
  }

  async delete(params: ParamsDto): Promise<any> {
    try {
      const user = await this.userModel.findById(params.id);
      await this.userModel.deleteOne({ _id: params.id }).exec();
      return successPlaceholder('Deleted User', user);
    } catch (error) {
      throw new ApiError(error);
    }
  }
}

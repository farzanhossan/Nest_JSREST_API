import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { UserService } from '../../user/services/user.service';
import { LoginDto } from '../dtos/login.dto';
import { RegisterDto } from '../dtos/register.dto';
import { BcryptHelper } from './../../../helpers/bcrypt.helper';
import { JWTHelper } from './../../../helpers/jwt.helper';

@ApiTags('Admin Auth')
@UsePipes(new ValidationPipe())
@Controller('auth/admin')
export class AdminAuthController {
  readonly USER_TYPE = 'ADMIN';

  bcryptHelper = new BcryptHelper();
  jwtHelper = new JWTHelper();

  constructor(private readonly userService: UserService) {}

  @ApiBody({ type: RegisterDto })
  @Post('register')
  async register(@Body() data: RegisterDto) {
    // const dupUser = await this.userService.findAll({
    //   single: true,
    //   email: data.email,
    // });
    // if (dupUser.data) {
    //   throw new AlreadyExistError(
    //     initError(UserAlreadyExistErrorMessage, UserAlreadyExistErrorCode),
    //   );
    // }
    // const payload: User = data;
    // payload.type = this.USER_TYPE;
    // try {
    //   const user = await this.userService.insert(data);
    //   return user;
    // } catch (err) {
    //   return err;
    // }
  }

  @ApiBody({ type: LoginDto })
  @Post('login')
  async login(@Body() data: LoginDto) {
    //   const connection = getConnection();
    //   const user = await connection
    //     .createQueryBuilder(User, 'user')
    //     .addSelect('user.password')
    //     .where('user.email = :email', { email: data.email })
    //     .andWhere('user.type = :type', { type: this.USER_TYPE })
    //     .getOne();
    //   console.log(user);
    //   if (!user) {
    //     throw new NotFoundError(
    //       initError(UserNotFoundErrorMessage, UserNotFoundErrorCode),
    //     );
    //   }
    //   const isPasswordCorrect = await this.bcryptHelper.compareHash(
    //     data.password,
    //     user.password,
    //   );
    //   if (!isPasswordCorrect) {
    //     throw new WrongPasswordError(
    //       initError(WrongPasswordErrorMessage, WrongPasswordErrorCode),
    //     );
    //   }
    //   const token = await this.jwtHelper.makeAccessToken(user);
    //   return {
    //     success: true,
    //     message: 'User Login Success',
    //     data: { accessToken: token, user },
    //   };
  }
}

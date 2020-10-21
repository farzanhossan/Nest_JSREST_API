import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'farzan'})
  @IsNotEmpty()
  @IsString()
  username: string;

  @ApiProperty({ example: 'anything'})
  @IsNotEmpty()
  @IsString()
  passoword: string;
}

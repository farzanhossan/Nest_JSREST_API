import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'farzan' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ example: 'farzan' })
  @IsNotEmpty()
  @IsString()
  username: string;

  @ApiProperty({ example: 'anything' })
  @IsNotEmpty()
  @IsString()
  passoword: string;

  @ApiProperty({ example: 'test@gmail.com' })
  @IsNotEmpty()
  @IsString()
  email: string;

  @ApiProperty({ example: 'anything' })
  @IsNotEmpty()
  @IsString()
  type: string;
}

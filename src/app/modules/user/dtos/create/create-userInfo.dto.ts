import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateUserInfoDto {
  @ApiProperty({ example: 'Farzan Hossan'})
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ example: 'CE)'})
  @IsNotEmpty()
  @IsString()
  designation: string;

  @ApiProperty({ example: 'Pine Solutions Limited'})
  @IsNotEmpty()
  @IsString()
  company: string;

  @ApiProperty({ example: 'Banani, Dhaka'})
  @IsNotEmpty()
  @IsString()
  address: string;

  @ApiProperty({ example: 'farzan@gmail.com'})
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ example: '01700000000'})
  @IsNotEmpty()
  @IsString()
  phone: string;

  @ApiProperty({ example: 'admin'})
  @IsNotEmpty()
  @IsString()
  role: string;

  @ApiProperty({ example: '1 or 0'})
  @IsNotEmpty()
  @IsBoolean()
  isPrepaid: string;

  @ApiProperty({ example: 'Active/Inactive ....'})
  @IsNotEmpty()
  @IsString()
  status: string;

  @ApiProperty({ example: '500 or 1000 tk'})
  @IsNotEmpty()
  @IsNumber()
  creditLimit: string;

  @ApiProperty({ example: '1000.00 tk'})
  @IsNotEmpty()
  @IsNumber()
  balance: string;
}

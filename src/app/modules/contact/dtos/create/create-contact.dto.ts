import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateContactDto {
  @ApiProperty({ example: '01700000000'})
  @IsNotEmpty()
  @IsString()
  number: string;

  @ApiProperty({ example: 'Farzan'})
  @IsString()
  firstName: string;

  @ApiProperty({ example: 'Shakat'})
  @IsString()
  lastName: string;

  @ApiProperty({ example: 'Male/Female/Others', required: false})
  @IsString()
  gender: string;

  @ApiProperty({ example: 'Banani, Dhaka'})
  @IsString()
  address: string;

  @ApiProperty({ example: 'Pine Solutions'})
  @IsString()
  company: string;

  @ApiProperty({ example: 'farzan@gmail.com'})
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'yyyy-mm-dd'})
  @IsDate()
  dob: Date;

  @ApiProperty({ example: '25'})
  @IsString()
  age: string;
}

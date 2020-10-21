import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateSmsGatewayDto {
  @ApiProperty({ example: '1'})
  @IsNotEmpty()
  @IsString()
  uid: string;

  @ApiProperty({ example: 'farzan'})
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ example: 'airtel'})
  @IsNotEmpty()
  @IsString()
  operator: string;

  @ApiProperty({ example: '01700000000'})
  @IsNotEmpty()
  @IsString()
  originatingNumber: string;

  @ApiProperty({ example: 'farzan'})
  @IsNotEmpty()
  @IsString()
  username: string;

  @ApiProperty({ example: 'farzan'})
  @IsNotEmpty()
  @IsString()
  password: string;


  @ApiProperty({ example: 'Request'})
  @IsNotEmpty()
  @IsNumber()
  maxConcurrentReq: number;

  @ApiProperty({ example: '1000'})
  @IsNotEmpty()
  @IsNumber()
  balance: number;

  @ApiProperty({ example: 'Active/Inactive ....'})
  @IsNotEmpty()
  @IsString()
  status: string;

  @ApiProperty({ example: 'Prefix'})
  @IsNotEmpty()
  @IsString()
  prefixes: string;

  @ApiProperty({ example: '1'})
  @IsNotEmpty()
  @IsNumber()
  createdBy: number;

  @ApiProperty({ example: '1'})
  @IsNotEmpty()
  @IsNumber()
  lastModifiedBy: number;
}

import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateTransactionLogDto {
  @ApiProperty({ example: '1'})
  @IsNotEmpty()
  @IsNumber()
  userId: number;

  @ApiProperty({ example: 1000.00})
  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @ApiProperty({ example: 'Something Event'})
  @IsNotEmpty()
  @IsString()
  eventType: string;

  @ApiProperty({ example: 'sdf'})
  @IsNotEmpty()
  @IsString()
  trxRef: string;

  @ApiProperty({ example: 'sdf'})
  @IsNotEmpty()
  @IsString()
  remarks: string;

  @ApiProperty({ example: 'Some Descriptions'})
  @IsNotEmpty()
  @IsEmail()
  description: string;
}

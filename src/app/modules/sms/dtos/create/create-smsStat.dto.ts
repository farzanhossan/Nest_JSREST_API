import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateSmsStatDto {
  @ApiProperty({ example: '1'})
  @IsNotEmpty()
  @IsNumber()
  userId: number;

  @ApiProperty({ example: 'yyyy-mm-dd'})
  @IsNotEmpty()
  @IsDate()
  date: Date;

  @ApiProperty({ example: '100'})
  @IsNotEmpty()
  @IsNumber()
  totalSubmited: number;

  @ApiProperty({ example: '20'})
  @IsNotEmpty()
  @IsNumber()
  failed: number;

  @ApiProperty({ example: '80'})
  @IsNotEmpty()
  @IsNumber()
  totalSent: number;

  @ApiProperty({ example: '80'})
  @IsNotEmpty()
  @IsNumber()
  totalSentCount: number;

  @ApiProperty({ example: '15'})
  @IsNotEmpty()
  @IsNumber()
  maskSent: number;

  @ApiProperty({ example: '15'})
  @IsNotEmpty()
  @IsNumber()
  maskSentCount: number;

  @ApiProperty({ example: '25'})
  @IsNotEmpty()
  @IsNumber()
  fallbackSent: number;

  @ApiProperty({ example: '25'})
  @IsNotEmpty()
  @IsNumber()
  fallbackSentCount: number;
}

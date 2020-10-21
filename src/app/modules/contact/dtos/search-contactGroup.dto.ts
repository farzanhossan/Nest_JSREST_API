import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class SearchContactGroupDto {
  @ApiProperty({ example: '1700000001' })
  @IsNotEmpty()
  @IsString()
  number: string;

  @ApiProperty({ example: ['username', 'password'] })
  @IsArray()
  attributes: string;

  @ApiProperty({ example: 1 })
  // @IsNumber()
  page: number;

  @ApiProperty({ example: 10 })
  // @IsNumber()
  take: number;
}

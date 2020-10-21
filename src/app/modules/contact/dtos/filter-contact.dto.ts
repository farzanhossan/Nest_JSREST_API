import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class FilterContactDto {
  @ApiProperty({ example: 'Anything', required: false })
  @IsString()
  searchTerm: string;

  @ApiProperty({ example: 'Shaikat', required: false })
  @IsString()
  firstName: string;

  @ApiProperty({ example: 1 })
  // @IsNumber()
  page: number;

  @ApiProperty({ example: 10 })
  // @IsNumber()
  take: number;
}

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateSmsPackageDto {
  @ApiProperty({ example: 'farzan'})
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ example: '.50'})
  @IsNotEmpty()
  @IsNumber()
  maskRate: number;

  @ApiProperty({ example: '.60'})
  @IsNotEmpty()
  @IsNumber()
  nonmaskRate: number;

}

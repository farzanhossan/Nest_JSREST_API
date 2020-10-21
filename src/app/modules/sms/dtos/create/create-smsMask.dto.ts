import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSmsMaskDto {
  @ApiProperty({ example: 'Mask 1'})
  @IsNotEmpty()
  @IsString()
  mask: string;

  @ApiProperty({ example: 'Active/Inactive ....'})
  @IsNotEmpty()
  @IsString()
  status: string;
}

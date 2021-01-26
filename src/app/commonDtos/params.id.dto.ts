import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class ParamsDto {
  @ApiProperty({ example: '600fdc14fb295c52f3b3e09b' })
  @IsString()
  id: string;
}

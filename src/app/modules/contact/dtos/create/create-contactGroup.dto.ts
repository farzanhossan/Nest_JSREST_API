import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateContactGroupDto {
  @ApiProperty({ example: 'Farzan'})
  @IsString()
  name: string;

  @ApiProperty({ example: [{customField1: 'Anything'}, {customField2: 'Anything'}]})
  @IsString()
  customFields: string;

  @ApiProperty({ example: [{firstName: 'Farzan'}, {lastName: 'Shaikat'}]})
  @IsString()
  selectedFields: string;
}

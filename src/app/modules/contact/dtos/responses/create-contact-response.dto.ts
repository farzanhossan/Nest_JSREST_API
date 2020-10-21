import { ApiProperty } from '@nestjs/swagger';
import BaseResponseDto from '../../../../base/base.response.dto' 

class Data {
  @ApiProperty({ example: '01700000000'})
  number: string;

  @ApiProperty({ example: 'Farzan'})
  firstName: string;

  @ApiProperty({ example: 'Shaikat'})
  lastName: string;

  @ApiProperty({ example: 'Male/Female/Others'})
  gender: string;

  @ApiProperty({ example: 'Banani, Dhaka'})
  address: string;

  @ApiProperty({ example: 'Banani, Dhaka'})
  company: string;

  @ApiProperty({ example: 'farzan@gmail.com'})
  email: string;

  @ApiProperty({ example: 'yyyy-mm-dd'})
  dob: Date;

  @ApiProperty({ example: '25'})
  age: string;
}

export class CreateContactResponseDto extends BaseResponseDto {
  
  @ApiProperty()
  data: Data

  constructor(){
    super()
  }


}

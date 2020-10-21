import { ApiProperty } from '@nestjs/swagger';
import BaseResponseDto from '../../../../base/base.response.dto' 

class Data {
  @ApiProperty({ example: 'Farzan'})
  name: string;
}

export class CreateContactGroupResponseDto extends BaseResponseDto {
  
  @ApiProperty()
  data: Data

  constructor(){
    super()
  }
}

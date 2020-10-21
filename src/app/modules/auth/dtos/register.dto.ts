import { ApiProperty } from "@nestjs/swagger";
import { IsEmail } from "class-validator";

export class RegisterDto {
  @ApiProperty({example: 'auuntoo@gmail.com'})
  @IsEmail()
  email: string;

  @ApiProperty({example: '123456'})
  password: string;
}

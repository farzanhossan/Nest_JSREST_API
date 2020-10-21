import { ApiProperty } from "@nestjs/swagger"

export default class BaseResponseDto {
    @ApiProperty({example: 'Message'})
    message: string

    @ApiProperty({example: true})
    success: boolean
}
import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateSmsEntryDto {
  @ApiProperty({ example: '1'})
  @IsNotEmpty()
  @IsNumber()
  userId: number;

  @ApiProperty({ example: 'Reference Will be Here'})
  @IsString()
  ref: string;

  @ApiProperty({ example: 'Campaign 1'})
  @IsNotEmpty()
  @IsString()
  campaignName: string;

  @ApiProperty({ example: 'Method'})
  @IsNotEmpty()
  @IsString()
  method: string;

  @ApiProperty({ example: 'Message Body'})
  @IsNotEmpty()
  @IsString()
  body: string;


  @ApiProperty({ example: '1'})
  @IsNotEmpty()
  @IsNumber()
  type: number;

  @ApiProperty({ example: '60'})
  @IsNotEmpty()
  @IsNumber()
  length: number;

  @ApiProperty({ example: '2'})
  @IsNotEmpty()
  @IsNumber()
  count: number;

  @ApiProperty({ example: 'Some Recipient'})
  @IsNotEmpty()
  @IsString()
  recipient: string;

  @ApiProperty({ example: '4'})
  @IsString()
  gatewayUid: string;

  @ApiProperty({ example: '3'})
  @IsString()
  gatewayUidFallback: string;

  @ApiProperty({ example: '10'})
  @IsNotEmpty()
  @IsNumber()
  fallback: number;

  @ApiProperty({ example: '4'})
  @IsNotEmpty()
  @IsNumber()
  isNonMaskAllowed: number;

  @ApiProperty({ example: '50'})
  @IsNotEmpty()
  @IsNumber()
  isNonMaskSent: number;

  @ApiProperty({ example: '60'})
  @IsNotEmpty()
  @IsString()
  mask: string;

  @ApiProperty({ example: 'Active/Inactive ....'})
  @IsNotEmpty()
  @IsString()
  status: string;

  @ApiProperty({ example: 'Error Will be Here'})
  @IsString()
  errorCause: string;

  @ApiProperty({ example: 'Reamrks Here'})
  @IsString()
  remarks: string;

  @ApiProperty({ example: '5'})
  @IsNotEmpty()
  @IsNumber()
  priority: number;

  @ApiProperty({ example: '5'})
  @IsNotEmpty()
  @IsNumber()
  retryCount: number;

  @ApiProperty({ example: 'yyyy-mm-dd'})
  @IsNotEmpty()
  @IsDate()
  scheduledAt: Date;

  @ApiProperty({ example: 'yyyy-mm-dd'})
  @IsDate()
  sentAt: Date;

  @ApiProperty({ example: 'yyyy-mm-dd'})
  @IsDate()
  deliveredAt: Date;

  @ApiProperty({ example: '10'})
  @IsNumber()
  campaignId: number;

  @ApiProperty({ example: 'Delivered'})
  @IsNotEmpty()
  @IsString()
  deliveryStatus: string;

  @ApiProperty({ example: '654'})
  @IsNotEmpty()
  @IsNumber()
  dlr: number;

  @ApiProperty({ example: 'yyyy-mm-dd'})
  @IsDate()
  expiredAt: Date;
}

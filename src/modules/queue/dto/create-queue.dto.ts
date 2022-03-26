import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateQueueDto {
  @ApiProperty({ example: '#Test Queue' })
  @IsString()
  @IsNotEmpty()
  text: string;
}

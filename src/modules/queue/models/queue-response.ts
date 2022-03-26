import { ApiProperty } from '@nestjs/swagger';

export class QueueResponse {
  @ApiProperty({ example: 'Job enviado com sucesso!' })
  message: string;
}

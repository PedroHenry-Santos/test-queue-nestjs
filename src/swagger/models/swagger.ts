import { ApiProperty } from '@nestjs/swagger';

export class SwaggerError {
  @ApiProperty({
    example: '675bb8fa-51b5-4ab9-8a22-d6cfc0c487ff',
    description: 'Unique identifier for the error.',
  })
  code: string;

  @ApiProperty({ example: 'Bad request!', description: 'Error message.' })
  message: string;

  @ApiProperty({
    example: '2021-12-13T10:57:39.703Z',
    description: 'Timestamp of the error.',
  })
  timestamp: Date;

  @ApiProperty({
    example: '/api/example/error',
    description: 'Path of the error.',
  })
  path: string;
}

export class SwaggerPaginationMetadata {
  @ApiProperty({ example: 1 })
  readonly totalItems: number;

  @ApiProperty({ example: 1 })
  readonly itemCount: number;

  @ApiProperty({ example: 25 })
  readonly itemsPerPage: number;

  @ApiProperty({ example: 1 })
  readonly pageCount: number;

  @ApiProperty({ example: 1 })
  readonly totalPages: boolean;

  @ApiProperty({ example: 1 })
  readonly currentPage: boolean;
}

export class SwaggerUserMetadata {
  @ApiProperty({ example: 1 })
  sub: number;

  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 1 })
  companyId: 1;

  @ApiProperty({ example: 'john_doe@example.com' })
  email: number;

  @ApiProperty({ example: 1643138391 })
  iat: number;

  @ApiProperty({ example: 1644337991 })
  exp: number;
}

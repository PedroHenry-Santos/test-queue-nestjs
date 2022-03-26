import { SwaggerConfig } from './swagger.interface';

/**
 * Configuration for the swagger UI (found at /api).
 * Change this to suit your app!
 */
export const SWAGGER_CONFIG: SwaggerConfig = {
  title: 'Magna API',
  description: 'Api de gerenciamento da Magna serviços.',
  version: '1.0.0',
  tags: [],
  contact: {
    name: 'Strawti',
    url: 'https://strawti.com/',
    email: 'pedro@strawti.com',
  },
  bearer: {
    type: 'http',
    scheme: 'bearer',
    bearerFormat: 'JWT',
    name: 'JWT',
    description: 'Enter JWT token',
    in: 'header',
  },
};

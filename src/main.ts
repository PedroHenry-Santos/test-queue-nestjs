import {
  INestApplication,
  ValidationPipe,
  VersioningType,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { createDocument } from './swagger/swagger';
import * as morgan from 'morgan';

function setCors(app: INestApplication) {
  if (process.env.NODE_ENV === 'production') {
    app.enableCors({
      origin: process.env.CORS_ORIGINS.split(','),
    });
  } else {
    app.enableCors();
  }
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableShutdownHooks();
  app.setGlobalPrefix('api');
  app.enableVersioning({ type: VersioningType.URI });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  app.use(morgan('dev'));

  setCors(app);

  SwaggerModule.setup('api/docs', app, createDocument(app), {
    customSiteTitle: 'API Documentation',
    swaggerOptions: {
      persistAuthorization: true,
      tagsSorter: 'alpha',
      syntaxHighlight: {
        theme: 'arta',
        activate: true,
      },
      filter: true,
      docExpansion: 'none',
      displayRequestDuration: true,
      layout: 'BaseLayout',
    },
  });

  const configService = app.get(ConfigService);
  await app.listen(configService.get('PORT') || 3000, () =>
    console.log(`Listening on port ${configService.get('PORT') || 3000}`),
  );
}
bootstrap();

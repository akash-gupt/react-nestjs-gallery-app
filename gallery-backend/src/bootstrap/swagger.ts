import { Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const configureSwagger = app => {
  const logger = new Logger('ConfigureSwagger');

  const swaggerOptions = new DocumentBuilder()
    .setTitle('App')
    .setDescription('API Documentation')
    .setVersion('1.0.0')
    .addBearerAuth({ type: 'http' })
    .build();

  const swaggerDoc = SwaggerModule.createDocument(app, swaggerOptions);

  SwaggerModule.setup('/api/docs', app, swaggerDoc, {
    swaggerUrl: `/api/docs-json`,
    explorer: true,
    swaggerOptions: {
      docExpansion: 'list',
      filter: true,
      showRequestDuration: true,
    },
  });

  logger.log('Swagger setuped successfully');
};

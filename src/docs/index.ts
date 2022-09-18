/* eslint-disable prettier/prettier */
import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const swaggerSetup = async (app: INestApplication): Promise<void> => {
  const config = new DocumentBuilder()
    .setTitle('Controle de Merenda Back')
    .setVersion('1.0.0')
    .addServer('http://localhost:3000/api')
    .build()
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);
};

import { Logger, ValidationPipe, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import * as compression from 'compression';
import { appConfig } from 'configuration/app.config';
import * as cookieParser from 'cookie-parser';
import helmet from 'helmet';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger("EMAIL SERVICE")
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
    transport: Transport.RMQ,
    options: {
      urls: [appConfig.rmqURL],
      queue: `${appConfig.serverType}_P50_email_queue`
    },
  })
  await app.startAllMicroservices();

  app.enableCors()
  app.use(helmet());
  app.enableVersioning({
    type: VersioningType.URI,
  });
  app.use(cookieParser());
  app.use(compression());
  app.useGlobalPipes(new ValidationPipe());
  const port = appConfig.port
  await app.listen(port);
  logger.log(`Pattern50 Email Service (${appConfig.serverType}) is listening on port ${port}`);
}
bootstrap();

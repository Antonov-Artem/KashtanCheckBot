import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const bootstrap = async () =>
  await (await NestFactory.create(AppModule)).listen(3000);

bootstrap();

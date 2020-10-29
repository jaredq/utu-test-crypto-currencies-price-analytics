import 'reflect-metadata';
import { createConnection } from 'typeorm';

import { resolve } from 'path';
import { config } from 'dotenv';
config({ path: resolve(__dirname, '../.env') });

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  await createConnection();

  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

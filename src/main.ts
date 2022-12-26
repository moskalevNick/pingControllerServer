import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { corsOptions } from './etc/corsOptions';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(corsOptions);
  await app.listen(4000);
}
bootstrap();

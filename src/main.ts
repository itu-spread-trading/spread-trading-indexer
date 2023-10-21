import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Environment } from 'src/utils/Environment';
import { NestExpressApplication } from '@nestjs/platform-express';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.use(helmet());

  await app.listen(Environment.PORT);
}
bootstrap();

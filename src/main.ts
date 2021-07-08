import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['log', 'error', 'warn', 'debug'], cors: true 
  });
  app.setGlobalPrefix('api');
  //app.enableCors(); produccion
  await app.listen(3000);
}
bootstrap();

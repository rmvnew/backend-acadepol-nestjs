import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as dotenv from 'dotenv';
import { AppModule } from './app.module';
import { SwaggerService } from './config/swagger/swagger.service';

dotenv.config();

async function bootstrap() {

  const logger = new Logger('Bootstrap')

  try {
    const app = await NestFactory.create(AppModule);

    app.enableCors({
      origin: '*',
      allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE'
    });

    app.setGlobalPrefix('/api/v1')
    new SwaggerService().init(app)

    app.useGlobalPipes(
      new ValidationPipe({
        transform: true
      }))

    await app.listen(process.env.APP_PORT);



  } catch (error) {
    logger.error('Main error: ', error)
  }
}
bootstrap();

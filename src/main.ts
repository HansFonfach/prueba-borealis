import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { AppDataSource } from 'data-source';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Inicializa y ejecuta migraciones
  try {
    await AppDataSource.initialize();
    console.log('Data Source has been initialized!');
    
    // Ejecuta migraciones pendientes
    await AppDataSource.runMigrations();
    console.log('Migrations have been run!');
  } catch (err) {
    console.error('Error during Data Source initialization', err);
  }

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
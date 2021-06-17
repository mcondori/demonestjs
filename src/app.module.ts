import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Mensaje } from './domain/entities/mensaje.entity';
import { Identidad } from './domain/entities/identidad.entity';
import { MensajesController } from './mensajes/mensajes.controller';
import { MensajesService } from './mensajes/mensajes.service';
import { IdentidadesController } from './identidades/identidades.controller';
import { IdentidadesService } from './identidades/identidades.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345678',
      database: 'hex',
      entities: [Mensaje, Identidad],
      synchronize: false,
    }),
    TypeOrmModule.forFeature([Mensaje, Identidad]),
  ],
  controllers: [AppController, MensajesController, IdentidadesController],
  providers: [AppService, MensajesService, IdentidadesService],
})
export class AppModule {}

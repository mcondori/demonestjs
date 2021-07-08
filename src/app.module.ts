import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfigAsync } from './infrastructure/config/typeorm.config';
import { IdentidadesModule } from './modules/identidades/identidades.module';
import { MensajesController } from './modules/mensajes/mensajes.controller';
import { MensajesRepository } from './modules/mensajes/mensajes.repository';
import { MensajesService } from './modules/mensajes/mensajes.service';

import { ConfigModule } from '@nestjs/config';
import { Mensaje } from './modules/mensajes/entities/mensaje.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync(typeOrmConfigAsync),
    TypeOrmModule.forFeature([MensajesRepository, Mensaje]),
    IdentidadesModule,
    ConfigModule.forRoot({
      isGlobal: true,
    })   
  ],
  controllers: [AppController, MensajesController],
  providers: [AppService, MensajesService],
})
export class AppModule {}

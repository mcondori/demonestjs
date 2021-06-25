import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from './infrastructure/config/typeorm.config';
import { IdentidadesModule } from './modules/identidades/identidades.module';
import { Mensaje } from './modules/mensajes/entities/mensaje.entity';
import { MensajesController } from './modules/mensajes/mensajes.controller';
import { MensajesRepository } from './modules/mensajes/mensajes.repository';
import { MensajesService } from './modules/mensajes/mensajes.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmModule.forFeature([Mensaje]),
    IdentidadesModule,
  ],
  controllers: [AppController, MensajesController],
  providers: [AppService, MensajesService],
})
export class AppModule {}

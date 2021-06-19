import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MensajesRepository } from '../mensajes/mensajes.repository';
import { Identidad } from './entities/identidad.entity';
import { IdentidadesController } from './identidades.controller';
import { IdentidadesService } from './identidades.service';

@Module({
  imports: [TypeOrmModule.forFeature([MensajesRepository, Identidad])],

  controllers: [IdentidadesController],
  providers: [IdentidadesService],
  exports: [IdentidadesService],
})
export class IdentidadesModule {}

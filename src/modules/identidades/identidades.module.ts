import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MensajesRepository } from '../mensajes/mensajes.repository';
import { IdentidadesController } from './identidades.controller';
import { IdentidadesRepository } from './identidades.repository';
import { IdentidadesService } from './identidades.service';

@Module({
  imports: [TypeOrmModule.forFeature([MensajesRepository, IdentidadesRepository])],

  controllers: [IdentidadesController],
  providers: [IdentidadesService],
  exports: [IdentidadesService],
})
export class IdentidadesModule {}

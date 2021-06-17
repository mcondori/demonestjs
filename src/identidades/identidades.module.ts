import { Module } from '@nestjs/common';
import IdentidadRepository from 'src/Infrastructure/repositories/identidades.repository';
import { IdentidadesController } from './identidades.controller';
import { IdentidadesService } from './identidades.service';

@Module({
  controllers: [IdentidadesController],
  providers: [IdentidadesService, IdentidadRepository],
})
export class IdentidadesModule {}

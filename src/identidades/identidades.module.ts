import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Identidad } from './entities/identidad.entity';
import { IdentidadesController } from './identidades.controller';
import { IdentidadesService } from './identidades.service';

@Module({
  imports: [TypeOrmModule.forFeature([Identidad])],

  controllers: [IdentidadesController],
  providers: [IdentidadesService],
})
export class IdentidadesModule {}

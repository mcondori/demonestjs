import { EntityRepository, Repository } from 'typeorm';
import { Identidad } from './entities/identidad.entity';

@EntityRepository(Identidad)
export class IdentidadesRepository extends Repository<Identidad> {}

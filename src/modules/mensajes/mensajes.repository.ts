import { EntityRepository, Repository } from 'typeorm';
import { Mensaje } from './entities/mensaje.entity';

@EntityRepository(Mensaje)
export class MensajesRepository extends Repository<Mensaje> {}

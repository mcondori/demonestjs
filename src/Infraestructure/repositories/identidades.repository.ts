import { Identidad } from 'src/identidades/entities/identidad.entity';
import IIdentidadRepositoy from 'src/identidades/identidades.repository';

export default class IdentidadRepository implements IIdentidadRepositoy {
  get(): Promise<Identidad> {
    throw new Error('Method not implemented.');
  }
}

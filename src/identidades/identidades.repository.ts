import { Identidad } from './entities/identidad.entity';

export default interface IIdentidadRepositoy {
  get(): Promise<Identidad>;
}

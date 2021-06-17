import { Identidad } from 'src/identidades/entities/identidad.entity';

export class IdentidadDto {
  readonly identidad?: Identidad;
  readonly cantidadIntentos?: number;
  readonly mensaje: string;
}

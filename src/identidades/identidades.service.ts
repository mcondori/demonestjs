import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Identidad } from 'src/identidades/entities/identidad.entity';
import { Repository } from 'typeorm';
import { CreateIdentidadDto } from './dto/create-identidad-dto';
import { IdentidadDto } from './dto/identidad-dto';

@Injectable()
export class IdentidadesService {
  constructor(
    @InjectRepository(Identidad)
    private readonly identidadRepository: Repository<Identidad>,
  ) {}

  async getAll(): Promise<Identidad[]> {
    return await this.identidadRepository.find();
  }

  async createIdentidad(
    identidadNuevo: CreateIdentidadDto,
  ): Promise<Identidad> {
    const nuevo = new Identidad();
    nuevo.idNum = identidadNuevo.idNum;
    nuevo.nombres = identidadNuevo.nombres;
    return this.identidadRepository.save(nuevo);
  }

  async updateIdentidad(
    idNum: number,
    identidadActualizar: CreateIdentidadDto,
  ): Promise<Identidad> {
    const identidadUpdate = await this.identidadRepository.findOne(idNum);
    identidadUpdate.nombres = identidadActualizar.nombres;
    return await this.identidadRepository.save(identidadUpdate);
  }

  async deleteIdentidad(idMensaje: number): Promise<any> {
    return await this.identidadRepository.delete(idMensaje);
  }

  async buscarIdentidad(cantMaxima: number): Promise<any> {
    try {
      for (let index = 1; index <= cantMaxima; index++) {
        const numeroGenerado: number = Math.round(
          Math.random() * (1000 - 1) + 1,
        );
        const consultaIdentidad = await this.identidadRepository.findOne(
          numeroGenerado,
        );
        if (consultaIdentidad) {
          const respuestaIdentidad: IdentidadDto = {
            identidad: consultaIdentidad,
            cantidadIntentos: index,
            mensaje: 'Resultado encontrado',
          };
          return respuestaIdentidad;
        }
      }
      const respuestaIdentidad: IdentidadDto = {
        mensaje: 'No se ha encontrado ningun registro en el rango especificado',
      };
      return respuestaIdentidad;
    } catch (error) {
      return null;
    }
  }
}

import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Res,
  HttpStatus,
  Param,
  Req,
} from '@nestjs/common';
import { CreateIdentidadDto } from './dto/create-identidad-dto';
import { IdentidadesService } from './identidades.service';

@Controller('identidades')
export class IdentidadesController {
  constructor(private identidadesServices: IdentidadesService) {}
  @Post()
  create(@Body() createIdentidadDto: CreateIdentidadDto, @Res() response) {
    this.identidadesServices
      .createIdentidad(createIdentidadDto)
      .then((mensaje) => {
        response.status(HttpStatus.CREATED).json(mensaje);
      })
      .catch(() => {
        response
          .status(HttpStatus.FORBIDDEN)
          .json({ mensaje: 'error en la creacion de mensaje' });
      });
  }

  @Get()
  getAll(@Res() response) {
    this.identidadesServices
      .getAll()
      .then((mensajesList) => {
        response.status(HttpStatus.OK).json(mensajesList);
      })
      .catch(() => {
        response
          .status(HttpStatus.FORBIDDEN)
          .json({ mensaje: 'error en la obtencion de identidades' });
      });
  }

  @Put(':id')
  update(
    @Body() updateIdentidadDto: CreateIdentidadDto,
    @Res() response,
    @Param('id') idNum,
  ) {
    this.identidadesServices
      .updateIdentidad(idNum, updateIdentidadDto)
      .then((mensaje) => {
        response.status(HttpStatus.OK).json(mensaje);
      })
      .catch(() => {
        response
          .status(HttpStatus.FORBIDDEN)
          .json({ mensaje: 'error en la edicion del mensaje' });
      });
  }

  @Delete(':id')
  delete(@Res() response, @Param('id') idMensaje) {
    this.identidadesServices
      .deleteIdentidad(idMensaje)
      .then((res) => {
        response.status(HttpStatus.OK).json(res);
      })
      .catch(() => {
        response
          .status(HttpStatus.FORBIDDEN)
          .json({ mensaje: 'error en la eliminacion del mensaje' });
      });
  }

  @Get('/criteria')
  buscarIdentidad(@Req() request, @Res() response) {
    const { query } = request;
    const cantMaxima: number = query.cantMaxima as any;
    this.identidadesServices
      .buscarIdentidad(cantMaxima)
      .then((mensajesList) => {
        response.status(HttpStatus.OK).json(mensajesList);
      })
      .catch(() => {
        response
          .status(HttpStatus.FORBIDDEN)
          .json({ mensaje: 'error en la busqueda de identidades' });
      });
  }
}
function ApiUseTags(arg0: string) {
  throw new Error('Function not implemented.');
}


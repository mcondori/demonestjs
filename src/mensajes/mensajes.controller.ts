import { Controller, Post, Body, Get, Put, Delete, Res, HttpStatus, Param } from '@nestjs/common';
import { response } from 'express';
import { CreateMensajeDto } from '../domain/dto/create-mensaje-dto';
import { MensajesService } from './mensajes.service';


@Controller('mensajes')
export class MensajesController {
    constructor (private mensajesServices: MensajesService){

    }
    
    @Post()
    create (@Body() createMensajeDto: CreateMensajeDto, @Res() response){
        this.mensajesServices.createMensaje(createMensajeDto).then( mensaje => {
            response.status(HttpStatus.CREATED).json(mensaje);
        }).catch(()=>{
            response.status(HttpStatus.FORBIDDEN).json({mensaje: 'error en la creacion de mensaje'});
        });
    }

    @Get()
    getAll (@Res() response){
        this.mensajesServices.getAll().then( mensajesList => {
            response.status(HttpStatus.OK).json(mensajesList)
        }).catch(()=>{
            response.status(HttpStatus.FORBIDDEN).json({mensaje: 'error en la obtencion de mensajes'});
        });
    }

    @Put(':id')
    update(@Body() updateMensajeDto: CreateMensajeDto, @Res() response, @Param('id') idMensaje){
        this.mensajesServices.updateMensaje(idMensaje, updateMensajeDto).then(mensaje => {
            response.status(HttpStatus.OK).json(mensaje);
        }).catch(() =>{
            response.status(HttpStatus.FORBIDDEN).json({mensaje: 'error en la edicion del mensaje'});
        });
    }

    @Delete(':id')
    delete(@Res() response, @Param('id') idMensaje){
        this.mensajesServices.deleteMensaje(idMensaje).then(res => {
            response.status(HttpStatus.OK).json(res);
        }).catch(() =>{
            response.status(HttpStatus.FORBIDDEN).json({mensaje: 'error en la eliminacion del mensaje'});
        });
    }

}

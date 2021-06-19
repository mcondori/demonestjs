import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Identidad } from './modules/identidades/entities/identidad.entity';
import { IdentidadesModule } from './modules/identidades/identidades.module';
import { Mensaje } from './modules/mensajes/entities/mensaje.entity';
import { MensajesController } from './modules/mensajes/mensajes.controller';
import { MensajesService } from './modules/mensajes/mensajes.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345678',
      database: 'hex',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: false,
    }),
    TypeOrmModule.forFeature([Mensaje]),
    IdentidadesModule,
  ],
  controllers: [AppController, MensajesController],
  providers: [AppService, MensajesService],
})
export class AppModule {}

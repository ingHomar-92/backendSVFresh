import { Module } from '@nestjs/common';
import { LotesRecepcionService } from './lotes-recepcion.service';
import { LotesRecepcionController } from './lotes-recepcion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LotesRecepcion } from './entities/lotes-recepcion.entity';
import { ProvidersModule } from 'src/providers/providers.module';
import { HttpCustomService } from 'src/providers/http/http.service';

@Module({
  imports: [ TypeOrmModule.forFeature([LotesRecepcion]), ProvidersModule ],
  controllers: [LotesRecepcionController],
  providers: [LotesRecepcionService, HttpCustomService],
})
export class LotesRecepcionModule {}

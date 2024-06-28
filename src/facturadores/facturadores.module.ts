import { Module } from '@nestjs/common';
import { FacturadoresService } from './facturadores.service';
import { FacturadoresController } from './facturadores.controller';

@Module({
  controllers: [FacturadoresController],
  providers: [FacturadoresService],
})
export class FacturadoresModule {}

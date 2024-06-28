import { Module } from '@nestjs/common';
import { LiquidacionesModule } from './liquidaciones/liquidaciones.module';
import { LotesRecepcionModule } from './lotes-recepcion/lotes-recepcion.module';
import { FacturadoresModule } from './facturadores/facturadores.module';
import { ProductoresModule } from './productores/productores.module';
import { FacturasModule } from './facturas/facturas.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProvidersModule } from './providers/providers.module';


@Module({
  imports: [LiquidacionesModule, LotesRecepcionModule, FacturadoresModule, ProductoresModule, FacturasModule, 
    TypeOrmModule.forRoot({
      type: 'mysql',
      host:'localhost',
      port: 3307,
      username: 'user_crud',
      password:'root',
      database:'db_crud',
      autoLoadEntities: true,
      synchronize: true,
    }
    ), ProvidersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

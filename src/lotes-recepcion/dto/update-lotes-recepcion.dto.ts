import { IsInt, IsOptional, IsString } from 'class-validator';

export class UpdateLotesRecepcionDto {



    @IsString()
    @IsOptional()
    lote_recepcion?: string;
    
    @IsString()
    @IsOptional()
    ticket?: string;
    
    @IsString()
    @IsOptional()
    fecha_corte?: string;
    
    @IsString()
    @IsOptional()
    huerta?: string;
    
    @IsString()
    @IsOptional()
    sagarpa?: string;
    
    @IsString()
    @IsOptional()
    productor?: string;
    
    @IsInt()
    @IsOptional()
    cajas_recibidas?: number;
    
    @IsInt()
    @IsOptional()
    kilos_recibidos?: number;

    @IsInt()
    @IsOptional()
    peso_externo?: number;

    @IsInt()
    @IsOptional()
    precio_compra?: number;

    @IsInt()
    @IsOptional()
    estimado_compra?: number;

    @IsString()
    @IsOptional()
    status?: string;

}

import {  IsInt, IsString } from "class-validator";

export class CreateLotesRecepcionDto {


    @IsInt()
    record_id: number;

    @IsString()
    lote_recepcion: string;
    
    @IsString()
    ticket: string;
    
    @IsString()
    fecha_corte: string;
    
    @IsString()
    huerta: string;
    
    @IsString()
    sagarpa: string;
    
    @IsString()
    productor: string;
    
    @IsInt()
    cajas_recibidas: number;
    
    @IsInt()
    kilos_recibidos: number;

    @IsInt()
    peso_externo: number;

    @IsInt()
    precio_compra: number;

    @IsInt()
    estimado_compra: number;
    
    @IsString()
    status: string;
}

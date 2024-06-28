import { Column, DeleteDateColumn, Entity } from "typeorm";

@Entity()
export class LotesRecepcion {

    /* record_id, fecha_corte, lote_recepcion, ticket,huerta, sagarpa, productor, cajas_recibidas, kilos_recibidos
      peso_externo, precio_compra, estimado_de_compra, status 
     */

    @Column()
    record_id: number;

    @Column({ primary: true })
    lote_recepcion: string;

    @Column()
    ticket: string;

    @Column()
    fecha_corte: string;

    @Column()
    huerta: string;
    
    @Column()
    sagarpa: string;

    @Column()
    productor: string;

    @Column()
    cajas_recibidas: number;

    @Column()
    kilos_recibidos: number;

    @Column()
    peso_externo: number;

    @Column()
    precio_compra: number;

    @Column()
    estimado_compra: number;

    @Column()
    status: string;
    
    @DeleteDateColumn()
    deleteAt: Date;


}

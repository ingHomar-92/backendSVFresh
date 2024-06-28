import { Injectable } from '@nestjs/common';
import { CreateLotesRecepcionDto } from './dto/create-lotes-recepcion.dto';
import { UpdateLotesRecepcionDto } from './dto/update-lotes-recepcion.dto';
import { LotesRecepcion } from './entities/lotes-recepcion.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HttpCustomService } from 'src/providers/http/http.service';

@Injectable()
export class LotesRecepcionService {

  constructor(@InjectRepository(LotesRecepcion) private readonly lotesRecepcionRepository: Repository<LotesRecepcion>, private readonly httpService: HttpCustomService){}


  async create(createLotesRecepcionDto: CreateLotesRecepcionDto) {

    const loteRecepcion = this.lotesRecepcionRepository.create(createLotesRecepcionDto);
    return await this.lotesRecepcionRepository.save(loteRecepcion);
    
  }

  async findAll() {
    return await this.lotesRecepcionRepository.find()
  }

  /**
   * OBTENERMOS TODOS LOS LOTES DE RECEPCION, LOS CUALES ESTEN PENDIENTES DE PAGO
   */
  public async listLotesRecepcion(){
     return this.httpService.lotesRecepcionAll();
    
  }

  async findOne(record_id: number) {
    return await this.lotesRecepcionRepository.findOneBy({record_id})
  }

  async update(id: number, updateLotesRecepcionDto: UpdateLotesRecepcionDto) {
    return  await this.lotesRecepcionRepository.update(id, updateLotesRecepcionDto);
  }

  async remove(record_id: number) {
    return await this.lotesRecepcionRepository.softDelete({record_id}) // se le pasa el Id
   // return await this.lotesRecepcionRepository.softRemove({}) //  se le pasa la instancia
  }
}

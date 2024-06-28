import { Injectable } from '@nestjs/common';
import { CreateFacturadoreDto } from './dto/create-facturadore.dto';
import { UpdateFacturadoreDto } from './dto/update-facturadore.dto';

@Injectable()
export class FacturadoresService {
  create(createFacturadoreDto: CreateFacturadoreDto) {
    return 'This action adds a new facturadore';
  }

  findAll() {
    return `This action returns all facturadores`;
  }

  findOne(id: number) {
    return `This action returns a #${id} facturadore`;
  }

  update(id: number, updateFacturadoreDto: UpdateFacturadoreDto) {
    return `This action updates a #${id} facturadore`;
  }

  remove(id: number) {
    return `This action removes a #${id} facturadore`;
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FacturadoresService } from './facturadores.service';
import { CreateFacturadoreDto } from './dto/create-facturadore.dto';
import { UpdateFacturadoreDto } from './dto/update-facturadore.dto';

@Controller('facturadores')
export class FacturadoresController {
  constructor(private readonly facturadoresService: FacturadoresService) {}

  @Post()
  create(@Body() createFacturadoreDto: CreateFacturadoreDto) {
    return this.facturadoresService.create(createFacturadoreDto);
  }

  @Get()
  findAll() {
    return this.facturadoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.facturadoresService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFacturadoreDto: UpdateFacturadoreDto) {
    return this.facturadoresService.update(+id, updateFacturadoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.facturadoresService.remove(+id);
  }
}

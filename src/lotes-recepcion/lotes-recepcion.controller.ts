import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LotesRecepcionService } from './lotes-recepcion.service';
import { CreateLotesRecepcionDto } from './dto/create-lotes-recepcion.dto';
import { UpdateLotesRecepcionDto } from './dto/update-lotes-recepcion.dto';




@Controller('lotes-recepcion')
export class LotesRecepcionController {

  constructor(private readonly lotesRecepcionService: LotesRecepcionService) {}


  @Post()
  create(@Body() createLotesRecepcionDto: CreateLotesRecepcionDto) {
    return this.lotesRecepcionService.create(createLotesRecepcionDto);
  }

  /*
 @Get()
  findAll() {
    return this.lotesRecepcionService.findAll();
  }*/

  @Get('list-all')
  public async listLotesRecepcion(){

    return this.lotesRecepcionService.listLotesRecepcion();

  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lotesRecepcionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateLotesRecepcionDto: UpdateLotesRecepcionDto) {
    return this.lotesRecepcionService.update(id, updateLotesRecepcionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.lotesRecepcionService.remove(id);
  }
}

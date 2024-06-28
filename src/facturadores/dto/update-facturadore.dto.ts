import { PartialType } from '@nestjs/mapped-types';
import { CreateFacturadoreDto } from './create-facturadore.dto';

export class UpdateFacturadoreDto extends PartialType(CreateFacturadoreDto) {}

import { PartialType } from '@nestjs/mapped-types';
import { CreateAshtarCodeDto } from './create-ashtar_code.dto';

export class UpdateAshtarCodeDto extends PartialType(CreateAshtarCodeDto) {}

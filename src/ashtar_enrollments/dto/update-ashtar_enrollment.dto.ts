import { PartialType } from '@nestjs/mapped-types';
import { CreateAshtarEnrollmentDto } from './create-ashtar_enrollment.dto';

export class UpdateAshtarEnrollmentDto extends PartialType(CreateAshtarEnrollmentDto) {}

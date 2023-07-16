import { PartialType } from '@nestjs/swagger';
import { CreateChaveDto } from './create-chave.dto';

export class UpdateChaveDto extends PartialType(CreateChaveDto) {}

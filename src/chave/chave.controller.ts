import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ChaveService } from './chave.service';
import { CreateChaveDto } from './dto/create-chave.dto';
import { UpdateChaveDto } from './dto/update-chave.dto';

@Controller('chave')
@ApiTags('Chave NF-e')
export class ChaveController {
  constructor(private readonly chaveService: ChaveService) {}

  @Post('/create')
  async create(@Body() createChaveDto: CreateChaveDto) {
    return this.chaveService.create(createChaveDto);
  }

  @Get('/all')
  async findAll() {
    return this.chaveService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.chaveService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateChaveDto: UpdateChaveDto,
  ) {
    return this.chaveService.update(+id, updateChaveDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.chaveService.remove(+id);
  }
}

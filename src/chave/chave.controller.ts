import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChaveService } from './chave.service';
import { CreateChaveDto } from './dto/create-chave.dto';
import { UpdateChaveDto } from './dto/update-chave.dto';

@Controller('chave')
export class ChaveController {
  constructor(private readonly chaveService: ChaveService) {}

  @Post()
  create(@Body() createChaveDto: CreateChaveDto) {
    return this.chaveService.create(createChaveDto);
  }

  @Get()
  findAll() {
    return this.chaveService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chaveService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChaveDto: UpdateChaveDto) {
    return this.chaveService.update(+id, updateChaveDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chaveService.remove(+id);
  }
}

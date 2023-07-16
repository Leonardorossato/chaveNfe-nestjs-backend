import { Injectable } from '@nestjs/common';
import { CreateChaveDto } from './dto/create-chave.dto';
import { UpdateChaveDto } from './dto/update-chave.dto';

@Injectable()
export class ChaveService {
  create(createChaveDto: CreateChaveDto) {
    return 'This action adds a new chave';
  }

  findAll() {
    return `This action returns all chave`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chave`;
  }

  update(id: number, updateChaveDto: UpdateChaveDto) {
    return `This action updates a #${id} chave`;
  }

  remove(id: number) {
    return `This action removes a #${id} chave`;
  }
}

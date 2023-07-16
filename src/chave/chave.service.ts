import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateChaveDto } from './dto/create-chave.dto';
import { UpdateChaveDto } from './dto/update-chave.dto';
import { Chave } from './entities/chave.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ChaveService {
  constructor(
    @InjectRepository(Chave)
    private readonly chaveNfeRepository: Repository<Chave>,
  ) {}

  create(createChaveDto: CreateChaveDto) {
    return 'This action adds a new chave';
  }

  async findAll() {
    try {
      const chave = await this.chaveNfeRepository.find();
      return chave;
    } catch (error) {
      throw new HttpException(
        'Erro ao tentar achar todas as chaves NF-e',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findOne(id: number) {}

  async update(id: number, updateChaveDto: UpdateChaveDto) {}

  async remove(id: number) {}
}

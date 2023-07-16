import { Module } from '@nestjs/common';
import { ChaveService } from './chave.service';
import { ChaveController } from './chave.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chave } from './entities/chave.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Chave])],
  controllers: [ChaveController],
  providers: [ChaveService],
})
export class ChaveModule {}

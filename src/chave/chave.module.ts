import { Module } from '@nestjs/common';
import { ChaveService } from './chave.service';
import { ChaveController } from './chave.controller';

@Module({
  controllers: [ChaveController],
  providers: [ChaveService]
})
export class ChaveModule {}

import { Module } from '@nestjs/common';
import { CasosService } from './casos.service';
import { CasosResolver } from './casos.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Caso, CasoSchema } from './entities/caso.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Caso.name, schema: CasoSchema }]),
  ],
  providers: [CasosResolver, CasosService],
})
export class CasosModule {}

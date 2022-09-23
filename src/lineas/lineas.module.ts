import { Module } from '@nestjs/common';
import { LineasService } from './lineas.service';
import { LineasResolver } from './lineas.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Linea, LineaSchema } from './entities/linea.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Linea.name, schema: LineaSchema }]),
  ],
  providers: [LineasResolver, LineasService],
})
export class LineasModule {}

import { Module } from '@nestjs/common';
import { CasosService } from './casos.service';
import { CasosResolver } from './casos.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Caso, CasoSchema } from './entities/caso.entity';
import { BusesModule } from '../buses/buses.module';
import { JerarquiasModule } from '../jerarquias/jerarquias.module';
import { LineasModule } from '../lineas/lineas.module';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Caso.name, schema: CasoSchema }]),
    BusesModule,
    JerarquiasModule,
    LineasModule,
    UsersModule,
  ],
  providers: [CasosResolver, CasosService],
})
export class CasosModule {}

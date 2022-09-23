import { Module } from '@nestjs/common';
import { JerarquiasService } from './jerarquias.service';
import { JerarquiasResolver } from './jerarquias.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Jerarquia, JerarquiaSchema } from './entities/jerarquia.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Jerarquia.name, schema: JerarquiaSchema },
    ]),
  ],
  providers: [JerarquiasResolver, JerarquiasService],
})
export class JerarquiasModule {}

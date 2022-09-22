import { Module } from '@nestjs/common';
import { JerarquiasService } from './jerarquias.service';
import { JerarquiasResolver } from './jerarquias.resolver';

@Module({
  providers: [JerarquiasResolver, JerarquiasService]
})
export class JerarquiasModule {}

import { Module } from '@nestjs/common';
import { LineasService } from './lineas.service';
import { LineasResolver } from './lineas.resolver';

@Module({
  providers: [LineasResolver, LineasService]
})
export class LineasModule {}

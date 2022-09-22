import { Module } from '@nestjs/common';
import { BusesService } from './buses.service';
import { BusesResolver } from './buses.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Bus, BusSchema } from './entities/bus.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Bus.name, schema: BusSchema }])],
  providers: [BusesResolver, BusesService],
})
export class BusesModule {}

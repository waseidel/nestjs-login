import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBusInput } from './dto/create-bus.input';
import { UpdateBusInput } from './dto/update-bus.input';
import { Bus, BusDocument } from './entities/bus.entity';

@Injectable()
export class BusesService {
  constructor(@InjectModel(Bus.name) private busModel: Model<BusDocument>) {}
  async create(createBusInput: CreateBusInput): Promise<Bus | undefined> {
    const bus = new this.busModel({
      ...createBusInput,
    });
    return bus.save();
  }

  async findAll(): Promise<Bus[] | undefined> {
    return await this.busModel.find({});
  }

  findOne(mc: string) {
    return `This action returns a #${mc} bus`;
  }

  async findById(_id: Bus) {
    return await this.busModel.findById(_id);
  }

  update(id: number, updateBusInput: UpdateBusInput) {
    return `This action updates a #${id} bus`;
  }

  remove(id: number) {
    return `This action removes a #${id} bus`;
  }
}

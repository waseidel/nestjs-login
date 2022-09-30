import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { CreateJerarquiaInput } from './dto/create-jerarquia.input';
import { UpdateJerarquiaInput } from './dto/update-jerarquia.input';
import { Jerarquia, JerarquiaDocument } from './entities/jerarquia.entity';
import { JerarquiaResponse } from './dto/jerarquia.dto';

@Injectable()
export class JerarquiasService {
  constructor(
    @InjectModel(Jerarquia.name)
    private jerarquiaModel: Model<JerarquiaDocument>,
  ) {}
  create(createJerarquiaInput: CreateJerarquiaInput) {
    const createdJerarquia = new this.jerarquiaModel(createJerarquiaInput);
    return createdJerarquia.save();
  }

  async findAll(): Promise<JerarquiaResponse[] | undefined> {
    return await this.jerarquiaModel.find({})
  }

  async findOne(id: mongoose.Schema.Types.ObjectId): Promise<Jerarquia | undefined> {
    return await this.jerarquiaModel.findById(id);
  }

  async findById(_id: Jerarquia) {
    return await this.jerarquiaModel.findById(_id);
  }

  update(
    id: mongoose.Schema.Types.ObjectId,
    updateJerarquiaInput: UpdateJerarquiaInput,
  ) {
    return `This action updates a #${id} jerarquia`;
  }

  remove(id: number) {
    return `This action removes a #${id} jerarquia`;
  }
}

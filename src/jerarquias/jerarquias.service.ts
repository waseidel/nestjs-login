import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { CreateJerarquiaInput } from './dto/create-jerarquia.input';
import { UpdateJerarquiaInput } from './dto/update-jerarquia.input';
import { Jerarquia, JerarquiaDocument } from './entities/jerarquia.entity';

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

  findAll() {
    return `This action returns all jerarquias`;
  }

  findOne(id: mongoose.Schema.Types.ObjectId) {
    return `This action returns a #${id} jerarquia`;
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

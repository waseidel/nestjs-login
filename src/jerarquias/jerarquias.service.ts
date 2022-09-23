import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
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

  findOne(id: number) {
    return `This action returns a #${id} jerarquia`;
  }

  update(id: number, updateJerarquiaInput: UpdateJerarquiaInput) {
    return `This action updates a #${id} jerarquia`;
  }

  remove(id: number) {
    return `This action removes a #${id} jerarquia`;
  }
}

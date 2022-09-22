import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCasoInput } from './dto/create-caso.input';
import { UpdateCasoInput } from './dto/update-caso.input';
import { Caso, CasoDocument } from './entities/caso.entity';

@Injectable()
export class CasosService {
  constructor(@InjectModel(Caso.name) private casoModel: Model<CasoDocument>) {}
  create(createCasoInput: CreateCasoInput) {
    return 'This action adds a new caso';
  }

  findAll() {
    return this.casoModel.find({});
  }

  findOne(id: number) {
    return `This action returns a #${id} caso`;
  }

  update(id: number, updateCasoInput: UpdateCasoInput) {
    return `This action updates a #${id} caso`;
  }

  remove(id: number) {
    return `This action removes a #${id} caso`;
  }
}

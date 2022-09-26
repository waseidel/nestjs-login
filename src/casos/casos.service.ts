import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { CreateCasoInput } from './dto/create-caso.input';
import { UpdateCasoInput } from './dto/update-caso.input';
import { Caso, CasoDocument } from './entities/caso.entity';

@Injectable()
export class CasosService {
  constructor(@InjectModel(Caso.name) private casoModel: Model<CasoDocument>) {}

  async create(createCasoInput: CreateCasoInput, userid: string) {
    const createdCaso = new this.casoModel({
      ...createCasoInput,
      user: userid,
    });
    const guardado = await createdCaso.save();
    console.log(guardado);
    return guardado;
  }

  findAll() {
    return this.casoModel.find({});
  }

  findOne(id: mongoose.Schema.Types.ObjectId) {
    return `This action returns a #${id} caso`;
  }

  update(id: mongoose.Schema.Types.ObjectId, updateCasoInput: UpdateCasoInput) {
    return `This action updates a #${id} caso, ${updateCasoInput}`;
  }

  remove(id: mongoose.Schema.Types.ObjectId) {
    return `This action removes a #${id} caso`;
  }
}

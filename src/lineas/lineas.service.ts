import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateLineaInput } from './dto/create-linea.input';
import { UpdateLineaInput } from './dto/update-linea.input';
import { Linea, LineaDocument } from './entities/linea.entity';

@Injectable()
export class LineasService {
  constructor(
    @InjectModel(Linea.name) private lineaModel: Model<LineaDocument>,
  ) {}
  create(createLineaInput: CreateLineaInput) {
    const createdLinea = new this.lineaModel(createLineaInput);
    return createdLinea.save();
  }

  findAll() {
    return `This action returns all lineas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} linea`;
  }

  update(id: number, updateLineaInput: UpdateLineaInput) {
    return `This action updates a #${id} linea`;
  }

  remove(id: number) {
    return `This action removes a #${id} linea`;
  }
}

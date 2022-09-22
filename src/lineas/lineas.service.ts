import { Injectable } from '@nestjs/common';
import { CreateLineaInput } from './dto/create-linea.input';
import { UpdateLineaInput } from './dto/update-linea.input';

@Injectable()
export class LineasService {
  create(createLineaInput: CreateLineaInput) {
    return 'This action adds a new linea';
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

import { Injectable } from '@nestjs/common';
import { CreateJerarquiaInput } from './dto/create-jerarquia.input';
import { UpdateJerarquiaInput } from './dto/update-jerarquia.input';

@Injectable()
export class JerarquiasService {
  create(createJerarquiaInput: CreateJerarquiaInput) {
    return 'This action adds a new jerarquia';
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

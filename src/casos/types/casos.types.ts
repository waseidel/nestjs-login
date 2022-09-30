import { registerEnumType } from '@nestjs/graphql';

export enum Tipo {
  INCIDENTE,
  SALIDA,
  INGRESO,
}

registerEnumType(Tipo, {
  name: 'Tipo',
});

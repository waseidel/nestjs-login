import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CasosModule } from './casos/casos.module';
import { JerarquiasModule } from './jerarquias/jerarquias.module';
import { BusesModule } from './buses/buses.module';
import { LineasModule } from './lineas/lineas.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    MongooseModule.forRootAsync({
      useFactory: async () => ({ uri: process.env.MONGODB_URI }),
    }),
    UsersModule,
    AuthModule,
    CasosModule,
    JerarquiasModule,
    BusesModule,
    LineasModule,
  ],
})
export class AppModule {}

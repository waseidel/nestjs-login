import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '../users/users.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { AuthResolver } from './auth.resolver';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    ConfigModule,
    JwtModule.registerAsync({
      useFactory: async () => ({
        signOptions: { expiresIn: '1h' },
        secret: process.env.JWT_SECRET,
      }),
    }),
  ],
  providers: [AuthService, LocalStrategy, AuthResolver, JwtStrategy],
})
export class AuthModule {}

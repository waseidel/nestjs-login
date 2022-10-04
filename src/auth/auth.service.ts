import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserInputError } from 'apollo-server-express';
import { UsersService } from '../users/users.service';
import { LoginUserInput } from './dto/login-user.input';
import { SignUpInput } from './dto/sign-up.input';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) { }

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.getUser(email);

    if (!user) {
      return null;
    }

    const isValid = await bcrypt.compare(pass, user.password);

    if (!isValid) {
      return null;
    }

    const { password, ...result } = user;
    return result;
  }

  async login(loginUserInput: LoginUserInput) {
    const user = await this.usersService.getUser(loginUserInput.email);

    const token = this.jwtService.sign({
      sub: user._id,
      email: user.email,
    });

    return {
      token,
      user,
    };
  }

  async signUp(signUpInput: SignUpInput) {
    const user = await this.usersService.getUser(signUpInput.email);
    if (user) {
      throw new UserInputError('Correo ya existe');
    }

    if (!signUpInput.password.match(signUpInput.confirmPassword)) {
      throw new UserInputError('Las contraseñas no coinciden');
    }

    const { confirmPassword, password, ...createUser } = signUpInput;
    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await this.usersService.create({
      ...createUser,
      password: hashPassword,
    });

    const token = this.jwtService.sign({
      sub: newUser._id,
      email: newUser.email,
    });

    return {
      token,
      user: newUser,
    };
  }
}

import { BadRequestException, Injectable } from '@nestjs/common';
import { appError } from 'src/common/constants/errors';
import { CreateUserDto } from 'src/user/dto';
import { User } from 'src/user/models/user.model';
import { UserService } from 'src/user/user.service';
import { UserLoginDto } from './dto';
import * as bcrypt from 'bcrypt';
import { TokenService } from 'src/token/token.service';
import { AuthUserResponse } from './response';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly tokenService: TokenService,
  ) {}

  async registerUser(dto: CreateUserDto): Promise<User> {
    const existUser = await this.userService.findUserByEmail(dto.email);
    if (existUser) throw new BadRequestException(appError.USER_EXIST);
    return this.userService.createUser(dto);
  }

  async loginUser(dto: UserLoginDto): Promise<AuthUserResponse> {
    const existUser = await this.userService.findUserByEmail(dto.email);
    if (!existUser) throw new BadRequestException(appError.USER_NOT_EXIST);
    const validatePassword = await bcrypt.compare(
      dto.password,
      existUser.password,
    );
    if (!validatePassword) throw new BadRequestException(appError.WRONG_DATA);
    const userData = {
      name: existUser.firstName,
      email: existUser.email
    };
    const token = await this.tokenService.generateJwtToken(userData);
    const user = await this.userService.publicUser(existUser.email);
    return { ...user, token };
  }
}

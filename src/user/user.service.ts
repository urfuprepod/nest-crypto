import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDTO } from './dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './models/user.model';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private userRepository: typeof User) {}

  async findUserByEmail(email: string): Promise<User> {
    const user = await this.userRepository.findOne({ where: { email } });
    return user;
  }

  async hashPassword(password: string): Promise<any> {
    return bcrypt.hash(password, 10);
  }

  async createUser(dto: CreateUserDto) {
    dto.password = await this.hashPassword(dto.password);
    const user = await this.userRepository.create(dto);
    return user;
  }

  async publicUser(email: string) {
    return this.userRepository.findOne({
      where: { email },
      attributes: { exclude: ['password'] },
    });
  }

  async updateUser(email: string, dto: UpdateUserDTO) {
    const user = await this.userRepository.update<User>(dto, { where: { email } });
    return user;
  }

  async deleteUser(email: string): Promise<boolean> {
    await this.userRepository.destroy({where: {email}})
    return true;
  }
}

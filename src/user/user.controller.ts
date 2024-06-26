import {
  Body,
  Controller,
  Delete,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, UpdateUserDTO } from './dto';
import { JwtAuthGuard } from 'src/guards/jwt-guard';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Patch()
  updateUser(@Body() updateDto: UpdateUserDTO, @Req() req) {
    const user = req.user;
    return this.userService.updateUser(user.email, updateDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete()
  deleteUser(@Req() req) {
    const user = req.user;
    return this.userService.deleteUser(user.email);
  }
}

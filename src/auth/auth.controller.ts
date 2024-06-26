import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/dto';
import { UserLoginDto } from './dto';
import { JwtAuthGuard } from 'src/guards/jwt-guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  register(@Body() dto: CreateUserDto) {
    return this.authService.registerUser(dto);
  }
  
  @Post('login')
  login(@Body() dto: UserLoginDto) {
    return this.authService.loginUser(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Post('test')
  test() {
    return true;
  }
}

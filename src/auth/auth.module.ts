import { Module, forwardRef } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { TokenModule } from 'src/token/token.module';
import { JwtStrategy } from 'src/strategy';

@Module({
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  imports: [forwardRef(() => UserModule), TokenModule],
  exports: [AuthService]
})
export class AuthModule {}

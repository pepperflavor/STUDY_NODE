import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport/dist';
import { LocalStrategy } from './local.strategy';
import { AuthController } from './auth.controller';
import {JwtModule} from '@nestjs/jwt'
import { JwtStrategy } from './jwt.strategy';
import { ConfigService } from '@nestjs/config'


@Module({ // .env에 들어있는 시크릿키 어떻게 뽑아와야 하는지 모르겠다....
  imports:[UserModule, PassportModule, JwtModule.register({ secret: jwtConstants.secret, signOptions: { expiresIn: '60s'} })],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService]
})
export class AuthModule {}

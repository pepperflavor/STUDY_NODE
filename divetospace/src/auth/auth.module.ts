import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport/dist';
import { LocalStrategy } from './local.strategy';
import { AuthController } from './auth.controller';
import {JwtModule} from '@nestjs/jwt'
import { JwtStrategy } from './jwt.strategy';
import { ConfigModule, ConfigService } from '@nestjs/config'
import { EmailModule } from '../email/email.module';


@Module({ // JwtModule.register({ secret: jwtConstants.secret, signOptions: { expiresIn: '60s'} })
  imports:[UserModule, PassportModule , JwtModule, EmailModule], // service에서 직접 토큰 유지시간 지정해줘서 지움
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService]
})
export class AuthModule {}

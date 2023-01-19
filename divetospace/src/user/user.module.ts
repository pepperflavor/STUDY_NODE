import { Module } from '@nestjs/common';
import { UserLoginController } from './user-login/user-login.controller';
import { UserLoginService } from './user-login/user-login.service';
import { UserSignupController } from './user-signup/user-signup.controller';
import { UserSignupService } from './user-signup/user-signup.service';

@Module({
  controllers: [UserLoginController, UserSignupController],
  providers: [UserLoginService, UserSignupService],
  exports: [UserLoginService, UserSignupService]
})
export class UserModule {}
// service : 유저를 검색하고 비밀번호 확인
import { Module } from '@nestjs/common';
import { CreatorSignupModule } from './signup/signup.module';
import { AuthModule } from 'src/auth/auth.module';
import { CreatorLoginModule } from './login/login.module';
import { UserModule } from '../user/user.module';
import { ShinchungModule } from './shinchung/shinchung.module';
import { OpenfundingModule } from './openfunding/openfunding.module';


@Module({ 
  imports: [CreatorSignupModule, AuthModule, CreatorLoginModule, UserModule, ShinchungModule, OpenfundingModule],
  controllers: [],
  providers: []
})
export class CreatorModule {}

//  EmailService,
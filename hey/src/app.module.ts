import { Module } from '@nestjs/common';
import { AdminModule } from './admin/admin.module';
import { CreatorModule } from './creator/creator.module';
import { PrismaService } from './prisma.service';
import { UserSignUpController } from './user/user-sign-up/user-sign-up.controller';
import { UserSignUpService } from './user/user-sign-up/user-sign-up.service';
import { UserLoginController } from './user/user-login/user-login.controller';
import { UserLoginService } from './user/user-login/user-login.service';



@Module({
  imports: [ AdminModule, CreatorModule],
  controllers: [UserSignUpController, UserLoginController],
  providers: [PrismaService,UserSignUpService, UserLoginService],
})
export class AppModule {}

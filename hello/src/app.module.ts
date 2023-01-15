import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { CreatorModule } from './creator/creator.module';
import { UserLoginService } from './user/user-login/user-login.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [AdminModule, CreatorModule, UserModule],
  controllers: [],
  providers: [AppService, UserLoginService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { CreatorModule } from './creator/creator.module';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, CreatorModule, AdminModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

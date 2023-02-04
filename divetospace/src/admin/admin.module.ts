import { Module } from '@nestjs/common';
import { MypageModule } from './mypage/mypage.module';

@Module({
    imports: [MypageModule],
    controllers: [],
    providers: []
})
export class AdminModule {}

import { Controller, Post, UseGuards, Body } from '@nestjs/common';
import { CreatorShinchungService } from './shinchung.service';
import { JwtAuthGuard } from '../../auth/jwt-auth';
import { CreatorShinChungDto } from '../creator_dto/shinchung.dto';
import { Shinchunghada } from '@prisma/client';

@Controller('creator')
export class CreatorShinchungController {
    constructor(private readonly shinchungService: CreatorShinchungService){}

    //@UseGuards(JwtAuthGuard) // 토큰 있는지, 썩었는지확인하는 가드
    @Post('/shinchung')
    async creatorShinchung(@Body() shinChungData: CreatorShinChungDto): Promise<any>{
        return await this.shinchungService.shinchungFund(shinChungData);
    }
}

/*
{
    "shin_amount": "10",
    "shin_nft_totalbalance": "100",
    "shin_cover": "https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/7PBF/image/b0KVeRRLDeOtIap0-KnApW1uW8Q",
    "shin_opendate": "2023-02-04",
    "shin_description" : "트로르 감성의 노래래",
    "shin_category": "트로트트",
    "shin_creator_address": "0x123qwe123qwe",
    "com_name": "작곡가가",
    "lyric_name": "작사가",
    "sing_name": "하진가수"
}*/

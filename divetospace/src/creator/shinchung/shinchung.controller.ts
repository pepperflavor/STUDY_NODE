import { Controller, Post, UseGuards, Body } from '@nestjs/common';
import { CreatorShinchungService } from './shinchung.service';
import { JwtAuthGuard } from '../../auth/jwt-auth';
import { CreatorShinChungDto } from '../creator_dto/shinchung.dto';
import { Shinchunghada } from '@prisma/client';

@Controller('creator')
export class CreatorShinchungController {
    constructor(private readonly shinchungService: CreatorShinchungService){}

    @UseGuards(JwtAuthGuard) // 토큰 있는지, 썩었는지확인하는 가드
    @Post('/shinchung')
    async creatorShinchung(@Body() shinChungData: CreatorShinChungDto): Promise<Shinchunghada>{
        return await this.shinchungService.shinchungFund(shinChungData);
    }
}

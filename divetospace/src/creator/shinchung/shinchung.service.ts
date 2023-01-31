import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Shinchunghada } from '@prisma/client';
import { PrismaService } from '../../prisma.service';
import { CreatorShinChungDto } from '../creator_dto/shinchung.dto';

@Injectable()
export class CreatorShinchungService {
    constructor(private readonly prisma: PrismaService){}

    shinchungFund(shinchungData: CreatorShinChungDto): Promise<Shinchunghada>{
        try {
            const result = this.prisma.shinchunghada.create({
                data: shinchungData
            })
            return result;
        } catch (error) {
            throw new HttpException('신청데이터가 누락되었습니다.', HttpStatus.BAD_REQUEST)
        }
    }
}

import { Module } from '@nestjs/common';
import { OpenfundingController } from './openfunding.controller';
import { OpenfundingService } from './openfunding.service';
import { PrismaService } from '../../prisma.service';

@Module({
    controllers: [OpenfundingController],
    providers: [OpenfundingService, PrismaService]

})
export class OpenfundingModule {}

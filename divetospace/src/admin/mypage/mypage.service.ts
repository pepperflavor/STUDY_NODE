import { Injectable, HttpException } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class MypageService {
    constructor(private prisma: PrismaService){}

    // 상태값이 1인 심사대기중인 목록만 뽑아옴
    // 잘된다!
    async getAllFundList(){
        const result = await this.prisma.shinchunghada.findMany({
            where: {
                shin_ispermit: 1,
            }
        })
        if(result){
            return result;
        }else{
            throw new Error('목록조회 실패');
        }
    }

    // admin이 승인 OK 해줬을때 해줌
    async updatePermit(fundingID: number){
        const result = await this.prisma.shinchunghada.update({
            where:{
                shin_no : fundingID,
            },
            data: {
                shin_ispermit : 2,
            }
        })
        if(result){
            console.log('승인처리 성공');

            return result;
        }else{
            throw new HttpException('승인처리 실패', 400);
        }
    }

    // admin이 승인 OK 해줬을때 해줌
    async updateReject(fundingID: number){
        if(fundingID)console.log('아이디값 잘받아옴', fundingID);
        
        const result = await this.prisma.shinchunghada.update({
            where:{
                shin_no : fundingID,
            },
            data: {
                shin_ispermit : 3,
            }
        })
        if(result){
            console.log('승인 반려처리 성공');
            return result;
        }else{
            throw new HttpException('승인 반려처리 실패', 400);
        }
    }
}

import { Controller, Post, Param, HttpException, HttpStatus } from '@nestjs/common';
import { OpenfundingService } from './openfunding.service';
import { CreatorShinChungDto } from '../creator_dto/shinchung.dto';


// 유저가 펀딩 오픈버튼 누르면 피나타로 쏴줄 컨트롤러
@Controller('openfunding')
export class OpenfundingController {
    constructor(private openService: OpenfundingService){}

    @Post(':id')
    postPinata(@Param('id') shinId: string){
        try {
            // 아이디 뽑아서 숫자로 바꿔줌, db에서 조회할때 숫자로 해야하기때문
            const shinNo = parseInt(shinId); 
            if(typeof(shinNo) === 'number'){
                return this.openService.openFunding(shinNo);
            }
        } catch (error) {
            throw new HttpException('펀딩 아이디 추출 실패', HttpStatus.NOT_FOUND);
        }

    }

}

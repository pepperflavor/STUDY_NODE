import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { userLoginDto } from '../user_dto/user-login.dto';
import { user } from '@prisma/client';

@Injectable()
export class UserLoginService {
    constructor(private prisma: PrismaService){}

    async login(loginForm:userLoginDto): Promise<user|null>{
        try{
            const result = await this.prisma.user.findUnique({where:loginForm})
            console.log(result,"TYPE OF = ",typeof result)
            return result
        }catch(error){
            //throw new Httpexception('에러메세지', HttpStatus.에러내용 선택)
        }
    }
}

import { Injectable, OnModuleInit  } from '@nestjs/common';
import { user } from '@prisma/client';
import { PrismaService } from '../../prisma.service';
import { userSignUpDto } from '../user_dto/user-sign-up.dto';

@Injectable()
export class UserSignUpService{
    constructor(private prisma: PrismaService){}

    async greeting(){
        return 'Hi user';
    }

    async signUP(signupfrom:userSignUpDto):Promise<user>{
        try {
            return await this.prisma.user.create({ 
                data:signupfrom
            })    
        } catch (error) {
            // throw new httpException('',http.status())        
        }
        
    }
}

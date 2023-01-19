import { Injectable, Body } from '@nestjs/common';
import { HttpException } from '@nestjs/common/exceptions';
import { PrismaClient, User } from '@prisma/client';
import { userLoginDto } from '../user_dto/user-login.dto';

@Injectable()
export class UserLoginService {
    private readonly users =[
       {
        user_no:  1,
        user_nickname: 'Conan',
        user_pwd: '1234aaa',
        user_email : 'test1@test.com',
        user_wallet: '0x123456ddd789sss',
        user_streaming: 0,
        user_grade : 0,
       },
       {
        user_no:  2,
        user_nickname: 'RAYE',
        user_pwd: '1234',
        user_email : 'test2@test.com',
        user_wallet: '0x9999ssss888',
        user_streaming: 0,
        user_grade : 1,
       }
    ]

    // PrismaService 이걸 지정해야하는게 아닌감 // PrismaClient
    constructor(private readonly prisma:PrismaClient){}

    async findOne(userwallet: string): Promise<User>{
        // 지갑주소로 유저 찾기
        return  this.users.find(user => user.user_wallet === userwallet)
    }


    async login(loginForm: userLoginDto): Promise<User | undefined>{
        try {
            // 유저지갑주소랑 비밀번호 받아옴
            const result = await this.prisma.user.findUnique({ where: loginForm})
            return result
        } catch (error) {
            throw new HttpException('Login Fail ', 401)
        }
    }
    
}


// {
//     "user_no":  "1",
//     "user_nickname": 'Conan',
//     "user_pwd": '1234aaa',
//     "user_email" : 'test1@test.com',
//     "user_wallet": '0x123456ddd789sss',
//     "user_streaming": "0",
//     "user_grade" : "0",
//    }
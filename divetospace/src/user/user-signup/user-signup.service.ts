import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from '../../prisma.service';
import { userSignUpDto } from '../user_dto/user-sign-up.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserSignupService {
    constructor(private prisma: PrismaService){}

    async signUP(signupform: userSignUpDto): Promise<User>{
        try {
            const userPWD = signupform.user_pwd; // 입력폼 객체에서 비밀번호만 추출
            // 해시화
            return await this.prisma.user.create({
                data: signupform // 이미 객체 라서 그래도 넣어도 된다
            })
        } catch (e) {
            console.log('회원가입 오류');
            throw new Error(e)
        }

    }
}

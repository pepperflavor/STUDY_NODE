import { Injectable } from '@nestjs/common';
import { UserLoginService } from 'src/user/user-login/user-login.service';
import { HttpException } from '@nestjs/common/exceptions';
import { JwtService } from '@nestjs/jwt';
import { userLoginDto } from 'src/user/user_dto/user-login.dto';

// 여기서 비밀번호 해시화 해줘야함
@Injectable()
export class AuthService {
    constructor(private userService: UserLoginService, private jwtService: JwtService){}

    async validateUser(userWallet: string, enterPWD: string): Promise<any>{
        const user = await this.userService.findOne(userWallet); //db에 wallet 주소 일치하는 유저 리턴
        // 여기 비밀번호 암호화
        if(user && user.user_pwd === enterPWD){
            const { user_pwd, ...result} = user; // 비밀번호 제외하고 추출
            return result;
        }
        throw new HttpException('로그인 실패', 401); // 일치하는 유저가 없으면 오류
    }

    async login(user: userLoginDto){
        const payload = { userWallet: user.user_wallet, sub: user.user_pwd}
        return {access_token: this.jwtService.sign(payload)}
    }
}

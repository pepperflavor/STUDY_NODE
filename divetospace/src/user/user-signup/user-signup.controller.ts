import { Body, Controller, Get, Post } from '@nestjs/common';
import { userSignUpDto } from '../user_dto/user-sign-up.dto';
import { UserSignupService } from './user-signup.service';
import { User } from '@prisma/client';

@Controller('user-signup')
export class UserSignupController {
    constructor(private readonly UserSignupService: UserSignupService){ }

    @Post()
    async postSignup(@Body() userSignUpData: userSignUpDto):Promise<User>{
        return await this.UserSignupService.signUP(userSignUpData)
    }
}

import { Controller, Get, Post,Body } from '@nestjs/common';
import { UserSignUpService } from './user-sign-up.service';
import { userSignUpDto } from '../user_dto/user-sign-up.dto';
import { user } from '@prisma/client';

@Controller('user-sign-up')
export class UserSignUpController {
    constructor(private readonly UserSignUpService: UserSignUpService){}

    @Get('/get-greeting')
    async getGreeting():Promise<string>{
        return await this.UserSignUpService.greeting();
    }

    @Post('sign-up')
    async postSignup(@Body() userSignupData:userSignUpDto):Promise<user>{
        return await this.UserSignUpService.signUP(userSignupData)
    }
}

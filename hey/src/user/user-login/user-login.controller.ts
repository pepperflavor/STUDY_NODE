import { Controller, Post, Body,Query,Param} from '@nestjs/common';
import { UserLoginService } from './user-login.service';
import { userLoginDto } from '../user_dto/user-login.dto';

@Controller('user-login')
export class UserLoginController {
    constructor(private readonly UserLoginService:UserLoginService){}

    @Post(":id")
    async postuserLogin(@Body() loginData: userLoginDto, @Param("id") Param: number,@Query("user_email") user_email: string){
        console.log(loginData);
        console.log(Param); // :id로 잡은 param : Param으로 잡아둠
        console.log(user_email); // :id로 잡은 param : Param으로 잡아둠
       await this.UserLoginService.login(loginData);       
    }
}

import { IsString } from 'class-validator';

export class CreatorShinChungDto{
    
    shin_amount: number;

    shin_nft_totalbalance: number;

    @IsString()
    shin_cover: string;

    shin_opendate: Date;
    
    @IsString()
    shin_description : string;

    @IsString()
    shin_category: string;
    
    shin_ispermit? : number;

    @IsString()
    shin_creator_address: string;

}
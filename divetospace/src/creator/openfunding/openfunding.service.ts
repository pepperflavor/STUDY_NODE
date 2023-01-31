import { Injectable } from '@nestjs/common';
import { CreatorShinChungDto } from '../creator_dto/shinchung.dto';
import { PrismaService } from '../../prisma.service';
import fs from 'fs';

// const fs = require('fs');
// const path = require('path');
// const filePath = path.join(__dirname, 'metaDataJson')

@Injectable()
export class OpenfundingService {
    constructor(private prisma: PrismaService){}

    // 신청아이디 받아서 db에서 추출한다음 JSON으로 변환하기
    // 아이디만 받아서 db에서 꺼내자 //, openData: CreatorShinChungDto
    async openFunding(shinNo: number){
        // result => object 일거임
        const result = this.prisma.shinchunghada.findUnique({
            where:{ shin_no : shinNo }
        })

        // db에서 뽑은 객체 JSON으로 변환하기
        // stringify json 문자열로 바꿔줌
        const metaData = JSON.stringify(result);

        console.log('@@@@@');
        console.log(metaData);

         // JSON으로 변환한 메타데이터 파일로 저장하기
         this.saveMetaData(metaData, shinNo); 

         // metaDATA 잘 저장됐는지 확인하기
         this.readMetaJson(shinNo);


    }

    // 파일저장해주기 // writeFileSync는 예외를 try{} catch{} 로 처리해줘야함
    // metaData: string 맞음 JSON.stringify() 가 우리가 보기엔 json 같지만 string타입임
    private saveMetaData(metaData: string, shinNo: number){
        if(metaData){
            // 파일저장할 경로, 기록될 데이터, 옵션함수
            fs.writeFile( `${shinNo}`, metaData, 
                (err)=> {
                    if(err){
                        console.log(err);
                        throw new Error('META 데이터 파일저장 실패');
                    }else{
                        console.log(' META 데이터 파일저장 성공! ');
                    } 
                });
            }
        }

        // 메타데이터 저장한 json 파일 읽어오기
    private readMetaJson(shinNo: number){
        fs.readFile(`${shinNo}.json`,"utf-8", (err, data)=>{
            if (err) {
                console.error(err);
              } else {
                console.log(data);
              }
         })
    }

    // 피나타 api로 json 보내고 url 받아오기
    private postFundData(){
        try {
           
        } catch (error) {
            
        }
    }

}

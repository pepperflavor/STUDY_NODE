// 여러 데코레이터 추가하기


function Cry2(how: string){
    console.log('Cry2 팩토리');
    return function(constructor: Function){
        console.log(" 여기는 Cry 데코레이터 ");
        console.log(how);
        console.log(constructor);
    }
}

function addTemplat2(msg: string, hookId: string){
    console.log('addTemplat2 팩토리');
    return function(constructor: any){
        console.log(' 템플릿 랜더링 ');
        const hookEl = document.getElementById(hookId);
        const mypet = new constructor(); // 인스턴스화 pers3.name 출력값이 'Max'인걸 보니 아마 클래스 인스턴스화인듯
        if(hookEl){
            hookEl.innerHTML = msg;
            hookEl.querySelector('h1')!.textContent = mypet.name // 절대 null이 아니고
        }
    }
}


@Cry2('멍멍')
@addTemplat2('<h1> 우리집 강아지~ </h1>','app')
class Pet{
    name = '쿠키';

    constructor(){
        console.log('저희집 강아지를 소개합니다.');
    }
}

const mydog = new Pet();

console.log("인스턴스화 한것 출력 : ");
console.log(mydog);


/*
    log 찍어가면서 확인하기
    데코레이터를 여러개 찍으면 어떤 순서대로 작동하는가?

    log 결과물:

    Cry2 팩토리
    addTemplat2 팩토리
     템플릿 랜더링 
    저희집 강아지를 소개합니다.
     여기는 Cry 데코레이터 
    멍멍
    class Pet {
        constructor() {
            this.name = '쿠키';
            console.log('저희집 강아지를 소개합니다.');
        }
    }
    저희집 강아지를 소개합니다.
    인스턴스화 한것 출력 : 
    Pet {name: '쿠키'}
    

    순서:  cry2 팩토리가 먼저 -> addTemplat2 후
    함수실행은 밑의 데커레이터부터 시작되는 것



    +) 책에서 : 각 데코레이터의 표현은 위에서 아래로 평가된다. 
    그런다음 결과는 아래에서 위로 함수호출
    ex)
    @f
    @g
    test
    수학적으로 f(g(x)) 와 같다
*/
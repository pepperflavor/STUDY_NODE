//combineDecorator

function Cry(how: string){
    console.log(" 이제부터 데코레이터 ")
    return function(constructor: Function){
        console.log(how);
        console.log(constructor); // class의 생성자함수를 띄워주더라
    }
}

function addTemplate(msg: string, hookId: string){
    // 생성자 함수가 존재하긴하지만 사용하지 않을 거라면(_: any)로 선언해놓기,
    // 그리고 인스턴스화도 ㄴㄴ
    return function(constructor: any){
        const hookEl = document.getElementById(hookId);
        console.log(" addTemplate 데코레이터 ")
        const animal = new constructor(); // 그럼 임시로 인스턴스화 한 것인가?
        if(hookEl){
            hookEl.innerHTML = msg;
            hookEl.querySelector('h1')!.textContent = animal.name;
        }
    }
}


@addTemplate('<h1> My animal </h1>','app')
class Animal{
    name = 'dony'

    // 생성자 함수에 인수를 지정하게하면 화면에 안뜬다 왜일까...?
    constructor(){
        console.log('애완동물 소개')
    }
}

const a = new Animal();
console.log(" 인스턴스 호출 ",a);


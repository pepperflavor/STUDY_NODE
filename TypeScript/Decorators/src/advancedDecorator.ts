// 데코레이터 팩토링, 주어진 클래스에 관한 화면에 있는 어떤 것을 랜더할 수 있다.

// 이 함수를 팩토리화
// function Logger(constructor: Function){
//     console.log('Logging...'); // 언제 실행되는지 보려고 써놓음
//     console.log(constructor);
// }

function Logger2(logMsg: string){
    return function(constructor: Function){
        console.log(logMsg); // 언제 실행되는지 보려고 써놓음
        console.log(constructor);
    }
}

// 고급 데코레이터 +) Angular 참고 앵귤러와 동작방식이 비슷하다
function withTemplate(template: string, hookId: string){
    // 생성자 함수가 존재는하지만 사용하지 않는다고 알려주기 위해 _ 사용해서 (_ : Function) 이렇게 선언해둘 수 도 있음
    return function(constructor: any){
        const hookEl = document.getElementById(hookId);
        const mypet = new constructor(); // 인스턴스화 pers3.name 출력값이 'Max'인걸 보니 아마 클래스 인스턴스화인듯
        if(hookEl){
            hookEl.innerHTML = template;
            hookEl.querySelector('h1')!.textContent = mypet.name // 절대 null이 아니고
        }
    }
}

// 코딩에서 읽히거나 찾게되는 특별한 식별자 상징이다
// 데코레이터 함수를 실행하려는게 아니라 데코레이터 함수와 같은걸 반환해 줄 수 있는 함수를 실행
//@Logger2('LOGGING - PERSON') // 데코레이션 함수가 사용하는 값을 커스터 마이징할 수 있다.
@withTemplate('<h1>My Person Object</h1>', 'app')
class Person2{
    name = 'Max'; 

    constructor(){
        console.log('Creating person object...')
    }
}

const pers2 = new Person();

console.log(pers2); // {name: 'max'}

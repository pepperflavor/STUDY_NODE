// 데코레이터는 실체화되기 전 클래스가 정의만 돼도 실행된다.

// 함수로 호출하지 않고 데코레이터로 더해줄 것이다

function Logger(constructor: Function){
    console.log('Logging...'); // 언제 실행되는지 보려고 써놓음
    console.log(constructor);
    
}

// 코딩에서 읽히거나 찾게되는 특별한 식별자 상징이다
@Logger
class Person{
    name = 'Max'; 

    constructor(){
        console.log('Creating person object...')
    }
}

const pers = new Person();

console.log(pers); // {name: 'max'}

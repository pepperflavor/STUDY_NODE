const { getTableName } = require("./models/user.model");

class Person{
    constructor(age, name, hair){
        this.age = age;
        this.name = name;
        this.hair = hair;
    }

    addAge(){
        console.log(" addAge : " + this);
        return parseInt(this.age) + 1;
    }

    // 정적 메서드 클래스 내에서만 사용가능
    static disAge(){
        console.log(this); // 여기의 this는 구조를 봤을 때 바로 위인 Person을 가리키는 게 되는 것
        // console.dir로 구조 확인 할 수 있음, this의 위치를 확인해야 어떤 값을 가리키는지 알 수 있다.
        return parseInt(this.age) - 1;
    }
}

let a 

console.log(a)

// 생성자 함수 
function hello(age, name, hair){
    // this = {}
    this.age = age
    this.name = name 
    this.hair = hair 
    this.addAge = () => {
        this.age++
    }
    // return this
}

hello.prototype = diffAge = function(){
    this.name = 'hi'
}



class world {
    constructor(a){
        this.key = a
    }    
}


class Hello2 extends world{
    constructor(age, name, hair){
        super(1)
        // this = {}
        this.age = age
        this.name = name 
        this.hair = hair 
        // return this
    }

    addAge(){
        this.age    
    }
}


class Controller {
    constructor(service) {
        this.service = service
    }

    getName(){
        this.service.user()
    }
    postName(){}
}


class Service {
    constructor(){}

    user(){}
}

const service = new Service() // { user:()=>{ }}
const controller = new Controller(service)

class Repository {
    constructor() {}

    getUser(){

    }
}


/*
    인스턴스를 생성한다 == 틀로 붕어빵을 만들었다
    동적 메서드 : 인스턴스 화 할때!! 생성되는 메서드
    정적 메서드 : 이미 클래스에서 만들어져 있는 메서드. 그래서 값을 못갖고옴,
                    클래스의 인스턴스 없이 호출이 가능하며 인스턴스에서는 호출이 불가능하다.
                    클래스가 메모리에 올라갈때 정적 메소드가 자동적으로 생성된다. 그래서 클래스만으로 호출이 가능!
    Math.random() => 이것도 정적 메소드!!!! Math 클래스의 정적메소드random() 을 호출한것이다.

    동적 바인딩 .bind()
    코드로 this를 추측할 수 없다.
    js에서는 코드가 실행됐을때 this를 할당하기 때문이다.

    미리 constructor도 static으로 선언하는등 이 아니면 불가능
*/ 



const p = new Person("12", 'man') // 인스턴스 생성
console.log(p);
console.log(p.addAge()) // 동적메서드 호출
console.log(p.disAge()) // => 에러뜸 정적 메서드는 
console.log(Person.disAge()); // 정적메서드 호출하는 법

/*
   module.exports  
*/





/*
    객체 지향 = 비슷한 말로 이분법
    분류 = class ~~ 이기 때문에 js에서 class라는 키워드로 만들어짐

    class : 새의 공통점을 모아두고 이걸 기준으로 참새 비둘기 등등으로 만드는 것
    분류하겠다는 뜻이다. 즉 코딩을 분류작업하겠다. <-> prototype 반대 개념
    prototype : 인스턴스화 된걸로 새로운 객체를 만드는 것. ex) 참새를 갖고 비둘기를 만드는것...? 이 비둘기로 펭귄을 만드는 것 이런 사고방식이 프로토타입의 뜻

    js는 상속의 개념이 추상화에 실제 인스턴스를 넣어서 상속을 받는것
*/

// Person 클래스는 인스턴스화전이라 그냥 코드 집합, new 키워드는 constructor() 가 있어야 객체가 생성된다.
// 즉 new 키워드는 constructor()가

// 에러fn은 constructor가 없기 때문에 생성이 안된다
/*
    클래스 구조를 찍어봤을 때 보면 prototype에는 동적메서드만있고
    정적 메서드는 prototype 밖에 있다. 그래서 new 키워드로 constructor() 함수를 실행했을때
    정적메서드는 생성이 안되기 때문에 인스턴스에서 정적메서드에 접근이 안되는 것이다.    
    
    constructor() 인자 값 개수 == length

    conseol.log(p.constructor) => 부모클래스의 new 키워드로 실행시킨 constructor가 찍힌다.
    
*/

/*
    *** 서브 클래스(자식클래스)에서 super()를 먼저 호출 해야 하는 이유

    +) console.dir() 로 찍으면 대상의 구조를 확인가능하다

    그래서 클래스를 찍어보면

    length: constructor() 인자 개수
    prototype ~~ 이렇게 들어있는데 
    super() 를 호출해서 실행하면 prototype에 있는 내용들을 

*/

/*

*/
/*
    interface 키워드로 생성 js에는 없고 ts에만 있다.
    간단하게 객체의 구조와 형태를 설명하는데 사용한다.
*/

interface Person{
    name: string;
    age: number;

    //Person 객체가 가질 greet라는 메소드의 형태를 정의하는 것
    greet(phrase: string): void; // 파라미터로 문자열 타입인 pharase를 받고 리턴값은 void 인 메서드라는 뜻
}

let user1: Person; // 인터페이스를 객체의 타입으로 지정할 수 있게 된다!
// 인터페이스에 지정한대로 값을 지정하지 않으면 오류가 뜸

user1 ={
    name: 'hajin',
    age: 30,
    greet(phrase){
        console.log(phrase + " 라고 입력받음 " + this.name);
    }
}

console.log(user1.greet("이야호우!!")) // 이야호우!! 라고 입력받음 hajin

// 위의 내용을 인터페이스 말고 type으로 해도 에러없이 컴파일된다.

type Person2 ={
    name: string;
    age: number;

    //Person 객체가 가질 greet라는 메소드의 형태를 정의하는 것
    greet(phrase: string): void; // 파라미터로 문자열 타입인 pharase를 받고 리턴값은 void 인 메서드라는 뜻
}

let user2:Person2;

user2 ={
    name: "애옹쓰",
    age: 31,
    greet(phrase){
        console.log(phrase+ " 라고 말하는 " + this.name);
    }
}

console.log(user2.greet(" 끼이에오옹!!! ")); // 이렇게 해도 출력값은 오류없이 같다

////////////////////////////////////////////////////////////////////////////////////////////
// 엥 그럼 type이 있는데 왜 interface를 사용하지?
/*
    type(사용자정의 타입) !=== interface  : 같지 않다!!!

    몇 가지 차이점이 있는데
    interface 
        - 객체의 구조를 설명할때만 사용한다.
        클래스의 형태를 정의할때 자주 사용하는데 다음 예시를 보자
*/

interface MustGreet{
    name: string;

    greet(greeting: string):void;
}

let user3: MustGreet;

user3 = {
    name: "jin",
    greet(greeting){
        console.log(greeting + " 라고 인사하는 "+ this.name);
    }
}
// 오 뭔가 클래스와 비슷한 느낌이 난다. 그렇다면 이 인터페이스를 클래스에 적용해보자

// implements 키워드를 사용해서 MustGreet 라는 인터페이스가 정한 약속을 지켜야한다.
// 상속과 비슷해 보이는데 , 쉼표를 사용해서 여러개의 인터페이스를 적용할 수 있다는 것이 상속과의 차이점이다
// 상속은 하나의 부모만 가질 수 있다 

/*
    인터페이스는 주로 구체적인 구현이 아닌 서로 다른 클래스간의 기능을 공유하기 위해
    사용한다.
    인터페이스 내에 구현이나 값을 입력하는게 아니라 구조와 클래스가 가져야할 기능을 입력해야 한다

    추상클래스와 작업하는것이 비슷한데 약간 다른 점은 추상 클래스는 바로 인스턴스화 할 수 없고
    상속받은 자식으로 추상 메서드등을 모두 오버라이드 한다음에 그 자식클래스를 인스턴스화 할 수 있다.
    그리고 상속을 받았기 때문에 추상 클래스인 부모에 있던 다른 동적 메서드를 그대로 갖다 쓸 수 있다.

    인터페이스를 구현한 클래스는 내부의 동작등 세세한 부분보다 좀 더 껍데기를 구현하는 느낌...?
    그리고 당연히 추상 클래스도 상속을 해야 하기때문에 하나만 상속받을 수 있는 반면
    인터페이스는 여러개 적용할 수 있다.

*/

class GreetPerson implements MustGreet{
    name: string;
    age: number; // 추가로 더할 수 있지만

    constructor( enteredName:string ){
        this.name = enteredName; // 인터페이스에 지정해놓은 약속은 꼭 생성해야한다.
    }

    greet(greeting: string): void {
        console.log(" 인터페이스를 통해서 구현되었다 " + greeting);
    }
}

const aaa= new GreetPerson("jin")
console.log(aaa);


// 이렇게 interface에서 정해놓은 약속을 전부 구현하고, 원한다면 추가로 메서드나 프로퍼티를 구현해도된다
// 뭔가 추상클래스와 비슷한 느낌이지만 차이점은 GreetPerson은 바로 인스턴스화 할 수 있다는 점일 듯


/*
    인터페이스를 왜 사용하는 걸까???

        - 인터페이스를 적용하면 어쨌든 해당 인터페이스를 구현한 클래스에는
        내부 동작이 어떻게 되었든 정해진 데이터 타입을 받거나 return이 정해진 특정 메소드를 구현해야하고
        지정해 놓은 데이터 타입의 생성자를 설정해 놓아야 하기 때문에

        각각 클래스를 뜯어보지 않아도 인터페이스 구조에 의존하는 클래스가
        반드시 갖고 있는 프로퍼티나 메서드가 무엇인지 알 수 있게 된다.
*/
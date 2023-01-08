// 인터페이스로 상속을 구현할 수 있다.

interface Named{
    readonly name: string;
}

interface Greeting{
    greet(message: string): void;
}

// class Person implements Greeting, Named{
//     name: string;

   
// }
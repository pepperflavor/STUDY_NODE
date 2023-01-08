// 인터페이스로 상속을 구현할 수 있다.

interface Named{
    readonly name: string;
}

// Named 확장
// Greeting 인터페이스는 implements 했을때 Greeting 안의 greet 함수를 구현하도록 강제하지마
// 자신이 상속받은 Named의 name을 입력하도록 강제하지는 않는다. 
// 클래스와 다르게 , 쉼표를 이용해서 여러개를 상속받을 수 도 있다.
interface Greeting extends Named{
    greet(message: string): void;
}

// 그런데 이렇게 Greeting 인터페이스를 implements하는 클래스에서는 
// Greeting 인터페이스와 Greeting 인터페이스가 상속받는 Named 인터페이스의 내용을
// 모두 구현하도록 강제받는다.


class Person implements Greeting{
    name: string; //name에 대한 부분을 주석처리하면 오류가떴다
    age = 30;
    
    constructor(n: string){
        this.name = n;
    }

    greet(message: string): void {
        
    }
}

// 왜 이렇게 인터페이스를 나눠놓고 상속을 통해 결합을 시키는 것일까?
/*
    어떤 어플리케이션 작업을 수행하면서 어떤 객체에는 name을 입력하고
    greet 메서드를 제외하지만 어떤 객체에는 둘다 필요할 수 도 있다.
    그래서 둘을 나누고 선택적으로 결합해서 사용할 수 있도록 하는 것이다(레고같다고 생각하면 될듯)

    클래스의 상속과 인터페이스의 상속차이 
    : 클래스는 부모-자식 관계가 1ㄷ1 즉, 부모가 하나인데

    인터페이스는 여러개를 상속받을 수 있다.
*/
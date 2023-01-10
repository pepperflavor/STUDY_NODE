// 읽기 전용 인터페이스

/*
    인터페이스에 readonly 제어자를 추가할 수 있다. +) type(사용자 지정 타입에도 사용할 수 있는 키워드)
    *** public, private는 지정할 수 없음( class에만 쓰는 키워드인듯)
    readonly 키워드를 설정하면 설정한 객체의 속성이 한번만 설정되어야 하면
    이후에는 읽기 전용으로 수정할 수 없게 만든다.
    == 즉 객체가 초기화 되면 변경할 수 없다.

    인터페이스에만 설정해두고 클래스에는 적지 않는다.
    적지 않아도 implements를 하면 읽기전용 속성을 가진 프로퍼티임을 인지하고
    클래스 밖에서 다시 해당 변수값을 초기화할때 에러를 띄워준다.

*/

interface Animal{
    readonly name: string;

    cry(how: string): void;
}

class Cat implements Animal{
    name: string;

    constructor(n: string){
        this.name = n;
    }

    cry(how: string): void {
        console.log( this.name + " 은 이렇게 울어요 " + how);
    }
}

let animal1: Animal; // 타입지정

animal1 = new Cat("애옹쓰");

// 다음과 같이 다시 readonly 속성을 가진 프로퍼티를 초기화하려고 하면 오류가 난다
// animal1.name = "작은 애옹쓰"; 


class Person{
    constructor(age, name){
        this.age = age;
        this.name = name;
    }

    addAge(){
        console.log(" addAge : " + this);
        return parseInt(this.age) + 1;
    }

    // 정적 메서드 클래스 내에서만 사용가능
    static disAge(){
        console.log(this);
        return parseInt(this.age) - 1;
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
// console.log(p.disAge()) => 에러뜸
console.log(Person.disAge()); // 정적메서드 호출하는 법
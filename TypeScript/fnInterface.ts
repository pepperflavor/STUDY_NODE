// 함수에도 사용자 정의 type을 적용할 수 있다.
// 받을 두 인수는 number형이고 그 결과값도 number형이라는 의미
 type AddFn = (a: number, b: number) => number;

 let add: AddFn;

 add = (num1: number, num2: number) =>{
    return num1 + num2;
 }


 interface AddNumFn{
    // (받을인자에 대한 데이터타입 설정): 리턴받을 데이터 타입설정
    // 함수와 인자의 이름까지 정해주는 것만 빼면 이전에 그냥 interface를 implements한 것과 다를게 없다
    (a: number, b: number): number; 
 }

 //////////////////////////////////////////////////////////
 // 선택적 속성 및 인수

 interface Named{
    readonly name?: string;
    outputName?: string; // Named 기반의 클래스가 outputName이 문자열 타입으로 받길 원하지 않을때, 문자열이어야 하는지 선택적으로 하고자 할때
    // ? 를 붙인다. 그럼 타입스크립트가 이 속성이 해당 인터페이스를 구현하는 클래스 내에 있을 수 도 있지만 없을 수 도 있다고 인식한다
 }

 interface Greeting extends Named{
    greet(message: string): void;
 }


 // Greeting 인터페이스를 기반으로 한 클래스인데 outputName 를 생성하지 않아도 오류가 나지 않는걸 확인할 수 있다.
 class Person implements Greeting{
    name?: string; // 이름을 받을 수도 아닐 수도, 라고 설정했다
    age = 30;

    constructor(n?: string){
        if(n){
            this.name = n;
        }
        console.log('No entered Name')
    }

    greet(message: string): void {
        if(this.name){
            console.log(message + " " + this.name );
        } else{
            console.log(" Hi! unknown stranger!!")
        }
    }
 }


 let user1: Greeting;

 // 위에서 값을 받을 수도 아닐수도 ? 이렇게 설정해줬기 때문에 인스턴스화할때
 // 인수가 아무것도 없어도 생성이 가능하다
 user1 = new Person() // 33, 36번째 줄 참고


 // A 인터페이스에서는 변수 i를 선택적 속성을 입력하고 
 // A를 상속받는 B 클래스에서는 선택적이지 않은 속성으로 구현한다면
 // 로직을 초기화해줘야한다. 그렇지 않으면 에러 발생

 // js 에서 인터페이스는 코드로 output 되지 않는다 컴파일과정에서
 // 코드를 검사하는데에만 쓰이고 버려짐
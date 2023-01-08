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

 interface Named{
    readonly name: string;
    outputName?: string; // Named 기반의 클래스가 outputName이 문자열 타입으로 받길 원하지 않을때, 문자열이어야 하는지 선택적으로 하고자 할때
    // ? 를 붙인다. 그럼 타입스크립트가 이 속성이 해당 인터페이스를 구현하는 클래스 내에 있을 수 도 있지만 없을 수 도 있다고 인식한다
 }

 interface Greeting extends Named{
    greet(message: string): void;
 }


 // Greeting 인터페이스를 기반으로 한 클래스인데 outputName 를 생성하지 않아도 오류가 나지 않는걸 확인할 수 있다.
 class Person implements Greeting{
    name: string;
    age = 30;

    constructor(n: string){
        this.name = n;
    }

    greet(message: string): void {
        console.log(message);
    }


 }


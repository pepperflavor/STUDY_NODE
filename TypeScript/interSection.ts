/*
    인터섹션 타입(타입끼리 결합한 것)은 인터페이스와 유사하다.
    특히 인터섹션의 결합은 인터페이스의 상속과 유사하다.
*/

type Admin={
    name: string;
    privileges: string[];
};

type Employee= {
    name: string;
    startDate: Date;
}

// type 결합 연산자는 &
type ElevatedEmployee = Admin & Employee;

const e1:ElevatedEmployee ={
    name: 'demy',
    privileges: ['drawing'],
    startDate: new Date()
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInfo(emp : UnknownEmployee){
   // if(typeof emp === 'Employee'){ }  // 에러가 난다. JS에서는 사용자 정의 타입을 사용할 수 없음
    if('privileges' in emp){ // 객체안의 값이 존재하는지 확인하는 것으로 써주기, 키워드 in / '키' in 객체
        console.log(emp.privileges)
    }
}



// type 키워드를 interface로 바꿔도 똑같이 동작한다.

// 유니언 타입 : 데이터 타입을 제한할 수도 , 변수가 가질 수 있는 값을 제한할 수 도 있다.

type Animal = "Cat" | "Dog";
type NickName = string | number;

/*
    any / unknown / never 의 차이

    any : js의 어떤 타입의 데이터도 받을 수 있다.,
    unknown : any처럼 어떤 타입의 데이터도 할당할 수 있다. 다른 변수에 할당 | 사용할 때 타입을 강제해 any가 일으키는 오류를 줄여준다
    never : 어떤값도 할당할 수 없다.( ex: 함수의 리턴타입으로 지정하면 함수가 어떤값도 반환 X)
*/

// **주의 유니언타입을 사용할때 데이터 타입검사를 해줘야한다.

type Combine = string | number;
type Numberic = number | boolean;

type Hoye = Combine & Numberic;

// a와b 의 타입이 다를 수 있기 때문에 오류를 뱉어낸다 그래서 타입가드 코드가 필요
// function add(a: Combine, b: Combine){
//     return a + b; 
// }

function add(a: Combine, b:Combine){
    if(typeof a === 'string' || typeof b === 'string'){ // 이 줄이 타입가드
        return a.toString() + b.toString();
    }
    return a+b;
}




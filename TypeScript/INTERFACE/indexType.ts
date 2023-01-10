// 특정 키값에 의해서만 value를 호출하고 싶지 않을 때?
// 키 값의 데이터 형태와 value의 데이터 타입만 정해놓고 싶을때
// 특정 경우에 ex) 이메일은 유효한 형식이지만 이름이 유효하지 않은 형식일때

interface ErrorContainer{ //  { email: 'Not a valid email', username: 'Must Input something!'}
     // id: number;  이렇게 id를 number 형으로 설정할 수 없다. 여기에 인덱스 타입을 입력했기 때문
    [prop: string]: string; // 이렇게 인덱스 타입을 입력했기 때문이다. 
}

const errorBag: ErrorContainer = {
    // id: 1, // 위에 인터페이스에서 모든 속성에 문자열 값 타입이어야 한다고 설정했기 때문
    // 하지만 키 값을 숫자로 주는 것은 상관없다. => 문자열로 인식하기 때문
    // 그렇다면 위의 interface에서
    // [prop: number]: string 이렇게 설정해서 키값은 숫자형, value는 string형으로 할 수 있다.
    email: 'Not a valid email!',
    username : 'Must Input something!'

};
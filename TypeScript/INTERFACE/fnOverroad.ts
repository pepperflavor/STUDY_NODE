// 오버로드


// intersection 참고

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

// 함수에서 데이터 타입에 따라 결과가 필터링되도록 설정했지만
// reult 값 같은 결과값이 숫자형인지 문자열인지 TS에서는 알지 못한다 
const result = add(1, 5); 

// 형변환을 사용할 수 도 있지만 최선은 아니다.
const result_1 = add(1, 5) as string; 

// 이럴때 함수 오버로드를 사용할 수 있다. 선언 방법:
// 함수 오버로드는 함수 바로위에 같은 이름을 입력하면 된다.

function sum(a: number, b: number): number; // TS가 입력값이 number라면 return도 number라는 이 정보와 아래의 함수 정보를 결합한다.  
function sum(a: Combine, b: Combine){
    if(typeof a === 'string' || typeof b === 'string'){ // 이 줄이 타입가드
        return a.toString() + b.toString();
    }
    return a+b;
}

// 즉 TS는 변수 a, b가 type Combine = string | number; 이렇게 문자열 또는 숫자형인것을 알고
// 입력값 a,b가 number라면 return도 number 이도록 인식한다., 
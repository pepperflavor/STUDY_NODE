// 형변환(typeCasting)이란?
/*
    타입스크립트가 직접 감지하지 못하는 특정 타입의 값을 타입스크립트에 알려주는 역할을 한다

    ex) 앞단
    <body>
        <input type="Text" id= "user-input">
    </body>
*/

// 우리는 이 코드가 어떤 요소를 가리키는지 알지만 TS는 단순히 HTML의 어떤 요소~ 라고만 인식한다.
const userinputElement = document.getElementById('user-input');

// userinput.value ="hi" // 1. 이 코드의 오류메세지를 확인해보면 이 객체가 null 일수도 있다는 오류가 난다
// 2. 그래서 const userinput = document.getElementById('user-input')! 이렇게 해서 null 값이 절대 아니다 라고 설정해주면
// value가 HTMLElement 타입에 존재하지 않는다고 뜬다.
// WHY?? 기본적으로 모든 HTML 요소가 value라는 이 제네릭 타입을 속성으로 갖지 않기 때문이다. 그래서 형변환이 필요한 것이다


// 방법 1.
const userInput = <HTMLElement>document.getElementById('user-input')
// 방법1 처럼 홑화살괄호 쌍 다음에 있는 것이 무엇이든 HTML 요소라고 제대로 인식하게 된다.
// 정확하게는 babel로 컴파일링...? 하는 것이라고 한다.


// 방법.2
const userInput2 = document.getElementById('user-input')! as HTMLInputElement;
// ! 느낌표는 해당 값을 dom에서 절대 null 값을 반환하지 않을거란 확인이 있을때 사용
// 만약 잘 모르겠다면

if(userInput2){
    (userInput2 as HTMLInputElement).value; // 바로 HTMLInputElement.value 이렇게 속성값으로 접근할 수는 없다.
    // 이렇게 괄호로 먼저 HTML 요소로 평가받도록 해야한다
}


/* Null 병합

    만약 userinput이 null인데 dom api를 통해 이 값을 가져오면
    TS는 이에 대해 정확하게 알지 못할 것이다. 이럴때 어떻게 해야할까?
*/

// 방법 1. 그래서 상수에 그 값을 저장한다음
// 해당 값이null 이라면 fallback 값을 저장하도록 한다

const userinput = null;

const storedData = userinput || 'DEFAULT';

// 이 방법의 문제점 : userinput의 값이 null이거나 undefined가 아닌 빈 문자열이어도 'DEFAULT'를 반환한다.



// 방법 2. null 병합 연산자
const userinput2 = null;

const storedData2 = userinput ?? 'DEFAULT';

// userinput2 의 값이 null이거나 undefined라면, ( 빈 문자열이나 0이 아닌 null 이나 undsfined라면) fallback을 사용해야한다 는 의미이다
// null이거나 undefined라면 딱 이 경우에 해당 값을 사용하라는 뜻이다


/*
    타입가드란?
        - 런타임 시 특정 타입으로 작업을 수행하기 전에 해당 타입을 검사하는 코드 패턴이다

    타입 캐스팅이 유용한 경우
    - 타입스크립트에 특정 값이 특정 타입임을 알리려고 할떄
*/
// 제약 조건 작업하기
// 직접 만든 타입, 유니언 타입도 설정 가능하다.
// 제네릭 타입에 제약조건이 강제되는 것은 아니다.
// 
 
// Object.assign()의 인수로 객체만 받아야 하기때문에 인수의 데이터 형을 객체로 제한하기
function genericMerge3<T extends object, U extends object>(objA: T, objB: U) { 
    //아직은 T와 U가 뭔지는 모르지만
    return Object.assign(objA, objB);
}


/*
    이렇게 쓰면 length에 에러가뜬다 그래서 타입 따로 지정해주기

    function countAndPrint<T>(element: T){
        let text = 'Got no value';
        if(element.length === 1){
            text = "I Got 1 element."
        }else if(element.length > 0){
            text = 'I Got ' + element.length + ' elements'
        }
        return [element, text];
    }
*/

interface Lengthy{
    length : number
}


function countAndPrint<T extends Lengthy>(element: T): [T, string]{
    let text = 'Got no value';
    if(element.length === 1){
        text = "I Got 1 element."
    }else if(element.length > 0){
        text = 'I Got ' + element.length + ' elements'
    }
    return [element, text];
}

console.log(countAndPrint('Hi stranger')); // 제네릭으로 설정해 줬기 때문에 이렇게 문자열을 넣어도 객체로 반환해줌
// => ["Hi stranger", "I Got 11 elements"]

console.log(countAndPrint(['sports', 'cooking']));
// => [Array[2], "I Got 2 elements"]

console.log(countAndPrint([]));
// => [Array[0], "Got no value"]



// 제네릭 함수

function merge(objA: object, objB: object){
    return Object.assign(objA, objB); // Object.assign JS 내장 메서드 두 객체의 데이터를 하나의 객체로 합쳐준다
}

console.log(merge({ name: 'max'}, { age: 30})) // => {name: 'max', age: 30}

// 문제가 발생하는 경우
// const mergedObject = merge({ name: 'max'}, { age: 30});
// mergedObject.name; // 이렇게 접근하려고 하면 오류가 난다. 왜? TS가 mergedObject 에 name이 있는걸 모르고 알 수 없기 때문이다
// function merge() 이 함수의 인수로 객체를 넣었기 때문에 반환값도 객체일 것이라고 추론하기 때문이다.


// 방법 1. 형변환
// 형변환을 사용해 반환되는 것이 name과 age를 지니는 객체라고 알려주기, 근데 매우 번거롭다
const mergedObject = merge({ name: 'max'}, { age: 30}) as {name:string, age: number}





// 방법 2. 함수를 제네릭 함수로 바꾼다
// 왜 오류나지ㅋㅋㅋㅋㅋ

// 어쨌든 두 인수에 들어있는 데이터의 형식들을 정해 놓고 싶지는 않기 때문에 유연하게 받아들이도록 설정..?
// Object.assign() 메서드는 출처 객체!!!!들의 모든 열거 가능한 자체 속성을 복사해 대상 객체에 붙여넣습니다. 그 후 대상 객체를 반환합니다.
// ********* 주의 *************
// 객체가 아닌 인수를 넣으면 병합되지도 않고 딱히 별다른 에러 메세지도 뱉어주지 않는다. 어쨌든 무조건 객체 형태의 값을 넣어줘야함
// function genericMerge<T, U>(objA: T, objB: U) { // T와 U가 관습적으로 제네릭 선언시 사용하는 이름이라고한다. 
//     //아직은 T와 U가 뭔지는 모르지만
//     return Object.assign(objA, objB);
// }

// 함수 로직을 짜놓고 어떤 인수를 받을지 이렇게 설정할 수 있다.
// const mergedObject2 = genericMerge<{name: string, hobbies: string[]}, {age: number}>({ name: 'max', hobbies:['cooking']}, { age: 30})

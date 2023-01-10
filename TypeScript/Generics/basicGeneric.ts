/*
    제네릭 타입
    다른 타입과 연결되는 종류인데 다른 타입이 어떤 타입이어야 하는지는 크게 상관하지 않는다

    ex) 배열
    const names: Array = []; // TS에 Array라는 배열타입이 있음에도 오류가 발생한다
    오류를 읽어보면 하나의 타입 인수가 필요하다고 뜬다

    여기에 배열을 저장하고 싶은 상태. 배열 자체가 타입이자 그 자체로 타입을 구성하는 데이터의 목록이라 할 수 있다.
    데이터가 어떤 요소로 이루어지는 지는 상관하지 않으나 정보가 저장되는 것인지에 대해서는
    확인을 한다!  
*/

const names: Array<string> = [] // string[] 이라고 지정하는 것과 같은 내용 즉, 다른 타입과 연결되어있다
// 이렇게 한다면 ts가 names라는 배열이 문자열을 갖고 잇다는 것을 알고 있으므로
// 문자열과 관련된 메서드들 을 오류 나지 않고 사용가능

names[0].split(' ');


// 물론 유니언 타입도 가능하다
 const names2: Array<string | number> = []  


 // 음.. 그럼 튜플이나 유니언도 가능할까?
 const animal: string [] = []
 animal[0].split(' ');

 // 가능하다


 // 프로미스 타입
// 프로미스는 JS 기능이어서 JS에서만 생성할 수 있다. 
// 이렇게 구현하지만 js에서는 resolve, reject 이 두 인수를 자동으로 전달한다
 const promise: Promise<string> = new Promise((resolve, reject)=> {
    setTimeout(()=>{
        resolve('This is domne');
    } ,2000);
 })



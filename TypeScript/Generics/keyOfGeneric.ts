// 제네릭 타입 ketof 제약조건

/*
    
    function extractAndConvert(obj: object, key: string){
        return obj[key]; // 이 부분에 빨간줄이 그어지는데
        //  TS가 이 객체에 이 키가 있는지 보장할 수 없다고 알려주는 것이다
    }

    extractAndConvert({}, 'name');
*/


// keyof로 이 객체의 key임을 알려준것
function extractAndConvert<T extends object, U extends keyof T >(obj: T, key: U){
    return obj[key];
}
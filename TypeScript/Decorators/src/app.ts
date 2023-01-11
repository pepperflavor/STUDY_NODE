// propertyDecorator : 속성 데코레이터
// 속성으로 데코레이터 쓰기
// 클래스의 정의로 실행된다. JS에 프로퍼티를 정의했을때 클래스의 한 부분으로
// 즉 생성자 함수 일부로 실행된다

// 오브젝트가 어떻게 구성될지 모르므로  any타입으로 설정
// 이 함수의 첫번째 인수는 프로퍼티의 타겟이고, 이와 같은 프로퍼티는 
// 인스턴스화 했을때 생성된 객체의 프로토 타입이 될 것이다.
function Log(target: any, propertyname: string | Symbol){
    console.log(" 프로퍼티 데코레이터~~~ ");
    console.log(target);
    console.log(propertyname);
}

// 엑세서나 스태틱에 더할때 컨스트럭터 함수가 될 예정이기 때문에 어떤 값을 받을지 몰라 any로 지정
function Log2(target: any, name: string, descriptor: PropertyDecorator){
    console.log(" Accessor Decorator");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}


class Product{
    @Log
    title: string;
    private _price: number;

    set price(val: number){
        if(val > 0){
            this._price = val;
        }else{
            throw new Error('가격 설정이 올바르지 않습니다.')
        }
    }

    constructor(t: string, p: number){
        this.title = t;
        this._price = p; 
    }

  
    getPriceWithTax(tax: number){
        return this._price * (1 + tax);
    }
}
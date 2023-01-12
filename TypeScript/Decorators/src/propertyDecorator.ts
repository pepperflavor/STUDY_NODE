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
    //  (타겟 , 매개변수를 사용하는 메소드의 이름, 프로퍼티 디스크럽터)
    function Log2(target: any, name: string, descriptor: PropertyDescriptor){
        console.log(" Accessor Decorator");
        console.log(target);
        console.log(name);
        console.log(descriptor);
    }

    // 메서드 데코레이터 (타겟 , 매개변수를 사용하는 메소드의 이름, 프로퍼티 디스크럽터)
    function Log3(target: any, name: string, descriptor: PropertyDescriptor){
         console.log(" 메소드 데코레이터 ");
         console.log(target);
         console.log(name);
         console.log(descriptor);
    }

    // 매개 변수 데코레이터( 타겟 , 매개변수를 사용하는 메소드의 이름, (프로퍼티 디스크럽터 대신) 포지션)
    function Log4(target: any, name: string | Symbol, position: number){
        console.log(" 매개변수 데코레이터 ");
        console.log(target);
        console.log(name);
        console.log(position); // 인수의 인덱스
    }


class Product{
    @Log
    title: string;
    private _price: number;

    @Log2
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

  
    @Log3
    getPriceWithTax(@Log4 tax: number){
        return this._price * (1 + tax);
    }
}

/*
        @Log의 내용
        console.log(" 프로퍼티 데코레이터~~~ ");
        console.log(target);
        console.log(propertyname);

    프로퍼티 데코레이터~~~ 
    {constructor: ƒ, getPriceWithTax: ƒ}
    title



        @Log2의 내용
        console.log(" Accessor Decorator");
        console.log(target);
        console.log(name);
        console.log(descriptor);

    Accessor Decorator
    {constructor: ƒ, getPriceWithTax: ƒ}
    price                                           // 왜 _price 로 출력되지 않지...? 내부적인 프로퍼티가 아니라 외부 액세서의 이름이다 set price(val: name) 여기의 price
    {get: undefined, enumerable: false, configurable: true, set: ƒ}




        @Log3의 내용
        console.log(" 메소드 데코레이터 ");
        console.log(target);
        console.log(name);
        console.log(descriptor);


    



    메소드 데코레이터 
    {constructor: ƒ, getPriceWithTax: ƒ}
    getPriceWithTax //  메소드 이름 
    {writable: true, enumerable: false, configurable: true, value: ƒ} // 디스크립터가 나온다.


     value, writable 부분이 있는게 프로퍼티 데코레이터와 /  액세서 데코레이터, 메서드 데코러이터의 차이점(JS에 기반한 차이점임)

*/
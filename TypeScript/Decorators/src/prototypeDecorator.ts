function classDecoratorFactory<T extends { new (...args: any[]): {} }>(constructorFn: T) {
    console.log(' 클래스 생성자 갖고오나?');
    console.log(constructorFn);
    
    // 프로토타입으로 새로운 프로퍼티를 추가
    constructorFn.prototype.printer2 = function () {
       console.log('이건 데코레이터 프린터2');
    };

    constructorFn.prototype.gender = 'male';
  
    // 클래스를 프로퍼티에 상속시켜 새로운 멤버를 추가 설정
    return class extends constructorFn {
       public name = 'mark';
       private _age = 36;
  
       constructor(...args: any[]) {
          super(args);
       }
  
       public printer() {
          console.log(' 이건 데코레이터 프린터 ');
       }

       get howOld(){
            console.log(' 데코레이터 _age 출력');
            console.log(this._age);
            return this._age;
       }
    };
 }
  
 @classDecoratorFactory
 class Test3 {

    printer(){
        console.log(' 여기는 클래스 프린터 ');
    }

    callMsg(){
        console.log(' 여기 클래스에 메서드 있어요ㅠ')
    }
 }
  
 const test3 = new Test3();

 console.log('test3 인스턴스 살펴보기~ ');
 console.dir(test3)
  
//  console.log(test3); // class_1 { name: 'mark', _age: 36 }
//  console.log(' 타입캐스팅 없이 호출 ')
//  test3.printer(); // 데코레이터에 있는게 호출된다. 그럼 오버라이딩 되는건가?
//  test3.callMsg();

//  console.log(' 타입캐스팅 하고 호출 ');
//  (test3 as any).printer2();
//  (test3 as any).printer();
//  (test3 as any).howOld();

//  console.log((test3 as any).gender); // male



 // 클래스 Test의 타입에는 print 함수가 없고, 데코레이터로 동적으로 추가된 형태이니, 타입 단언을 사용
//  (test3 as any).print(); // this is print 
//  (test3 as any).print2(); // this is print2 




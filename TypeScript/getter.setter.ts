class A{
    private amount : number;

    get bringAmount(){
        if(this.amount){
            return this.amount;
        }
        throw new Error('NO vlaue in amount')
    }

    // private로 설정한 값을 수정하기 위해서 setter 사용
    set editAmount(value : number){
        if(!value){
            throw new Error('insert value for number')
        }
        this.addAmount(value); // this. 키워드로 클래스내 다른 메서드나 프로퍼티 참조
    }

    addAmount(value: number){
        return this.amount + value;
    }
    
}

const a = new A()

console.log(a.addAmount(1));
/* 
    +) 상속을 받았을때는 private 가 담기는데 인스턴스화하면 안담긴다!!! private는 인스턴스에서 생성, 호출 둘다안된다!!!

    예시는 그냥 클래스로 만들어서 처음엔 그냥 클래스 내부의 다른 함수나 프로퍼티를 참조할 수 있는데 왜 굳이 사용하는가 생각했는데
    만약 상속을 받았을때 private로 선언된 메서드나 함수는 자식 클래스에서 수정할 수 없을 것이다. 
    그래서 자식클래스에서 getter(: private로 선언한 값을 받아다줌) 와 setter(: private로 선언한 값을 참조하는 함수를 사용하거나 값을 변경할 수 있게 해준다)를 
    사용해서 프로퍼티를 호출하거나 수정할 수 있게 해준다.
*/
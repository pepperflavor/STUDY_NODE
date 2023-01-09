class B {
    #hello
    constructor(){
        this.name = 'web7722'
        this.#hello = '바보'
    }
    
    #aaa(){
        return this.name +" privat에서 호출"
    }


    bbb(){
        return this.#aaa()
    }

    static init(){

        return 'init~'
    }
}

class A extends B{
    constructor(fruit, price) {
        this.fruit = fruit;
        this.price = price;
    }

    static init(){
        return super.init()
    }

    like() {
        return "내가 좋아하는 과일은 " + this.fruit;
    }

    static notice() {
        return "일요일에 쉼"
    }
}


const v = A.init()
console.log(v);

// const a = new A("딸기", 2000);

// console.log(a.like());
// console.log(A.notice());


const b = new B()
console.log(b)
console.log(b.bbb())



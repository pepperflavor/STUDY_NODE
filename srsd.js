class recell {
    constructor(shirts, price){
        this.shirts = shirts,
        this.price = price
    }

     introduce(){
        return this.shirts + "는" + this.price + "입니다";
    }

    static saleRecell(){
        return "앞으로 1주일간 세일";
    }

}

recell.saleRecell();
console.log(recell.saleRecell());

const a = new recell("셔츠", 10000);
a.introduce();
console.log(a.introduce())


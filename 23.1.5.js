class lunch {
    constructor (menu1){
        this.gimbab = menu1;
        
    }

    addganishi(){
        // const it = "떡볶이추가"
        return this.gimbab + "파슬리";
    }

    static amountlunch(){
        return "그만좀먹어라";
    }
}

const bab = new lunch("김밥", 2);
//console.log(bab.amountlunch());
console.log(lunch.amountlunch());

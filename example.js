function bird(){
    this.wing = 2,
    this.fly = true
}

const Abird = new bird();

console.log( "A는 : ", Abird);

function cham(){
    this.small = "small"
}

cham.prototype = Abird

const cuteBird = new cham()
console.log("@@@@@ : " ,cuteBird);
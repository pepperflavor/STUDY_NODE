class Human {
    constructor(inputName, inputAge){
        this.name = inputName,
        this.age = inputAge
    }

     addAge1() {
        return this.age = ++this.age
    }

    static minusAge1() {
        return this.age = --this.age
    }
}


  const Name = new Human ("종찬", 25);

  console.log(Name.minusAge1())


  
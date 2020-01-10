class Animal {
    constructor(leg) {
        this.leg = leg
    }

    printAnimal() {
        console.log(this.name + "은 " + String(this.leg) + "개의 다리를 가진다.")
    }
}


class Lion extends Animal {
    // 첫 attribute 설정
    constructor(name, leg) {
        super(leg)
        this.name = name
    }

    getName() {
        console.log("내 이름은 " + this.name)
    }
}

myLion = new Lion("King", 4)
myLion.getName()
myLion.printAnimal()
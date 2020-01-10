function sayHello(name, byeCallback) {
    setTimeout(() => {
        console.log(name + "님 안녕하세요")
        byeCallback()
    }, 2000)
}

sayHello("Mike", () => console.log("안녕하가세요"))

function sayHello2(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(name + "님 안녕하세요")
            resolve("서울")
        }, 3000)
    })
}

// sayHello2("Frank")
//     .then(() => console.log("안녕히가세요"))

async function sayHelloBye(name) {
    loc = await sayHello2(name)
    console.log(loc + "로 안녕히가세요")
}

sayHelloBye("Eden")
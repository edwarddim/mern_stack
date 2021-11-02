
// // DEFINING A PROMISE CALLED noMondays
// const noMondays = new Promise( (resolve, reject) => {
//     if(new Date().getDay() !== 2) {
//         resolve("Good, it's not Monday!");
//     } else {
//         reject("Someone has a case of the Mondays!");
//     }
// });


// // CALLING ON noMondays
// noMondays
//     .then( res => console.log("RES: ", res) ) // SUCESSS
//     .catch( err => console.log("ERR: ", err) ) // UNSUCCESSFUL


const axios = (url) => {
    return new Promise((resolve, reject) => {
        const chance = Math.floor(Math.random() * 10)
        // THE API HAS AN UNSUCCESSFUL RESPONSE 1 OUT OF 10 TIMES
        console.log(chance)
        if(chance === 0){
            reject(`Request to ${url} has FAILED`)
        }
        else{
            resolve(`Request to ${url} was SUCCESSFUL`)
        }
    })
}

const apiCall = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("TIMER DONE")
        }, 2000)
    })
}


// console.log("start")
// // axios("https://pokeapi.co/v2")
// apiCall()
//     .then( res => console.log("RES: ", res) ) // SUCESSS
//     .catch( err => console.log("ERR: ", err) ) // UNSUCCESSFUL
// console.log("end")

// async/await
const asyncFunc = async () => {
    console.log("start")

    const response = await apiCall()
    console.log(response)

    console.log("end")
}
asyncFunc()

fetch("https://pokeapi.co")
    .then(response => response.json())
    .then(json_resp => console.log(json_resp))
    .catch(err => console.log(err))

const fetchCall = async () => {
    try{
        const response = await fetch("https://pokeapi.co")
        const json_resp = await response.json()
        console.log(json_resp)
    }
    catch(err){
        console.log(err)
    }
}
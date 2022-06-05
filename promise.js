// const noMondays = new Promise( (resolve, reject) => {
//     if(new Date().getDay() !== 2) {
//         resolve("Good, it's not Tuesday!");
//     } else {
//         reject("Someone has a case of the Tuesday!");
//     }
// });

// noMondays
//     .then( res => console.log(res) )
//     .catch( err => console.log(err) );

function generateId(){
    let id = ''
    for(let i = 0; i < 9; i++){
        id += Math.floor(Math.random() * 10)
    }
    return id
}

const axios = new Promise((resolve, reject) => {
    // THE API I'M MAKING THE REQUEST TO IS UNRELIABLE
    // 1 OUT OF 10 TIMES, WE GET A BAD RESPONSE BACK

    const chance = Math.floor(Math.random() * 10)
    if(chance == 0){
        reject({"ERR" : "The API responded with an ERROR"})
    }
    else{
        resolve({"SUCCESS" : "The API responded with a SUCCESS"})
    }
})

// axios
//     .then(res => console.log("THEN: ", res))
//     .catch(err => console.log("CATCH: ", err))

const createUser = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // VALIDATE THE NAME
            if(name.length < 3){
                reject({
                    "ValidationMessage" : "User name must be longer than 3 chars",
                    'name' : name
                })
            }
            else{
                resolve({
                    'id' : generateId(),
                    'name' : name
                })
            }
        }, 1000)
    })
}

// createUser("Edward")
//     .then(res => {
//         console.log(res)
//         return createUser("John")
//     })
//     .then(res => console.log(res))
//     .catch(err => console.log("CATCH: ", err))

// console.log("WHEN DOES THIS HAPPEN???")

Promise.all([
    createUser("Edward"),
    createUser("John"),
    createUser("Ja")
])
    .then(data => console.log("DATA: ", data))
    .catch(err => console.log("ERR: ", err))
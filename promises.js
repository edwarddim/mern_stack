// const noTuesdays = new Promise( (resolve, reject) => {
//     // CHECK TO SEE IF TODAY IS MONDAY
//     if(new Date().getDay() !== 2) {
//         resolve("Good, it's not Tuesday!");
//     } else {
//         reject("Someone has a case of the Tuesday!");
//     }
// });

// noTuesdays
//     .then(res => console.log("SUCCESS: ",res)) // successful
//     .catch(err => console.log("ERROR: ", err)) // unsuccessful




// const axios = new Promise((resolve, reject) => {
//     // THE API ONLY WORKS 9 OUT OF 10 TIMES
//     const chance = Math.floor(Math.random() * 10)

//     // THE API CALL WAS SUCCESSFUL
//     if(chance > 0){
//         resolve({"SUCCESS": "The API responded this time"})
//     }
//     // THE API CALL WAS UNSUCCESSFUL
//     else{
//         reject({"ERROR": "The API DID NOT responded this time"})
//     }
// })

// axios
//     .then(res => console.log("THEN: ", res))
//     .catch(err => console.log("CATCH: ", err))


const createUser = (userName) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // VALIDATE THE NAME
            if(userName.length < 3){
                reject({
                    "ValidationMessage" : "User name must be longer than 3 chars",
                    userName
                })
            }
            else{
                resolve({
                    'id' : "1233456",
                    userName
                })
            }
        }, 1000)
    })
}
createUser("Ed")
    .then(res => console.log("THEN: ", res))
    .catch(err => console.log("CATCH: ", err))
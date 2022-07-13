
// DEFINE
// const noMondays = new Promise((resolve, reject) => {
//     // CHECK TO SEE IF TODAY IS MONDAY
//     if (new Date().getDay() !== 2) {
//         resolve("Good, it's not Monday!");
//     }
    
//     else {
//         reject("Someone has a case of the Tuesdays!");
//     }
// });


// EXECUTE
// noMondays
//     .then(res => console.log(res)) // SUCCESSFUL
//     .catch(err => console.log(err)); // UNSUCCESSFUL


// DEFINE AN AXIOS FUNCTION
const axios = (url) => {
    return new Promise((resolve, reject) => {
        let chance = Math.floor(Math.random() * 10)
        if(chance === 0){
            reject({
                status:500,
                message:"The server did not respond"
            })
        }else{
            resolve({
                status:200,
                message:"The server DID respond"
            })
        }
    })
}

// EXECUTE
axios("https://wwww.pokeapi.co")
    .then(response => console.log("THEN: ", response))
    .catch(err => console.log("CATCH: ", err))
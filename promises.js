// DEFINE PROMISE
const noMondays = new Promise((resolve, reject) => {
    // IF TODAY IS NOT MONDAY - SUCCESS
    if (new Date().getDay() !== 2) {
        resolve("Good, it's not Tuesday!");
    } else {
        reject("NO MORE MONDAYS! THREE DAY WEEKENDS FOREVER");
    }
});

// CHECK PROMISE
// noMondays
//     .then(res => console.log("THEN: ", res))
//     .catch(err => console.log("CATCH: ", err))

// thenable

const axios = (url) => new Promise((resolve, reject) => {
    console.log(`YOU ARE MAKING A REQUEST TO ${url}`)
    let randomNumber = Math.floor(Math.random() * 10)
    if(randomNumber === 0){
        reject({
            'status' : 'error',
            'message': 'something went wrong'
        })
    }
    else{
        resolve({
            'status' : 'ok',
            'message': 'here is your data'
        })
    }
})

axios("https://pokeapi.co/api/v2/pokemon")
    .then(response => console.log("THEN: ", response))
    .catch(error => console.log('ERROR: ', error))
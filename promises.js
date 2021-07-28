function axios(){
    // GENERATE RANDOM NUM 0-9
    const chance = Math.floor(Math.random() * 10)
    return new Promise((resolve, reject) => {
        // WAS THE AXIOS REQUEST SUCCESSFUL?
        if(chance <= 8){
            resolve({
                message:"SUCCESS",
                data: "This was a success"
            })
        }
        // WAS THE AXIOS REQUEST UNSUCCESSFUL?
        else{
            reject({
                message:"UNSUCCESSFUL",
                data : "This was a failure"
            })
        }
    })
}


// axios()
//     .then(res => console.log("RES: ", res))
//     .catch(err => console.log("ERR: ", err))

function create(body){
    const promiseFunctinon = new Promise((resolve, reject) => {
        setTimeout(() => {
            if(body.length < 3){
                reject({
                    error: "VALIDATION MESSAGE: Author name must be longer than 3 characters"
                })
            }
            else{
                resolve({
                    _id : "fjiewoa;jfruh134j84r93htfg",
                    name : body,
                    createdAt : new Date(),
                    updatedAt : new Date()
                })
            }
        }, 500)
    })
    return promiseFunctinon
}


// create("edward")
//     .then(res => {
//         console.log(res)
//         return axios()
//             .then(res => console.log(res))
//     })
//     .catch(err => console.log(err))


// async / await
const test = async () => {
    try{
        const response = await create("edward")
        const axios_res = await axios()
        console.log(response)
        console.log(axios_res)
        console.log("After Response")
    }
    catch(err){
        console.log("CATCH STATEMENT: ", err)
    }
}
// test()


Promise.all([
    create("edward"),
    axios(),
    axios()
])
    .then(data => console.log(data))
    .catch(err => console.log(err))
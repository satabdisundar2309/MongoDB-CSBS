// ! Importing the dbConnection() function from mongodb.js
const dbConnection = require ("./mongodb")

// ? Handling the promise returned by dbConnection() function
// dbConnection().then((response)=>{
//     // console.log(response.find().toArray()) //this returns another promise
//     // Handling the above promise
//     response.find().toArray().then((data)=>{
//         console.log(data)
//     })
// })

// ? Handling the promise returned by dbConnection() function (2nd way)
const main = async ()=>{
    let data = await dbConnection() //here the promise returned by the dbConnection() is handled but will return another promise which is handled below
    let result = await data.find().toArray()
    console.log(result)
}

main()
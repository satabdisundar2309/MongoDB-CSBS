//! Reading the data

const dbConnection = require ("./mongodb")

const main = async ()=>{
    let data = await dbConnection()
    let result = await data.find().toArray()
    console.log(result)
}

main()
const dbConnection = require('./mongodb')

const update = async ()=>{
    let data = await dbConnection();
    // ? updateOne
    // let result = await data.updateOne({name:"akx zen"},{$set:{brand:"zenpact"}});

    // ? updateMany
    let result = await data.updateMany({price:2550},{$set:{brand:"zenpact 10"}});

    if(result.acknowledged){
        console.log("Data updated")
    }
}

update();
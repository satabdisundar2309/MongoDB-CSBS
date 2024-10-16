const dbConnection = require('./mongodb')

const deleteData = async ()=>{
        let data = await dbConnection();

        // ? deleteOne
        // let result = await data.deleteOne({name: "akx zen"})

        // ? deleteMany
        let result = await data.deleteMany({category: "laptop"})

        if(result.acknowledged){
            console.log("data deleted")
        }
}

deleteData();
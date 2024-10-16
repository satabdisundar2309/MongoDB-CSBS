const dbConnection = require("./mongodb");

const insert = async () => {
  let data = await dbConnection();

//   data.insertOne({
//     name: "ROZ gaming",
//     brand: "asus",
//     price: 1750,
//     category: "laptop",
//   }); //This will also insert this data in the database

  let result = await data.insertMany([
    {
        name: "akx zen",
        brand: "jio",
        price: 2550,
        category: "laptop",
      },
      {
        name: "pavilion",
        brand: "hp",
        price: 2950,
        category: "laptop",
      },
      {
        name: "s20 ultra",
        brand: "samsung",
        price: 3750,
        category: "mobile",
      }
  ]); //we wrote await because result will also be a promise as we are doing a task that could take time

  if(result.acknowledged){
    console.log("data inserted");
  }

};

insert();

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
    .then(() => {
        console.log("Connected to DB");
    }).catch((err) => {
        console.log(err);
    });
async function main() {
    await mongoose.connect(MONGO_URL);
}



const initDB = async () => {
    // For delete data
    // await Listing.deleteMany({});

    initData.data=initData.data.map((obj)=> ({
        ...obj,
        owner: "6669f7859a85220f23382487",
    }));


    // For initilization data
    let res=await Listing.insertMany(initData.data);
    console.log(res);
    console.log("Data was initilized");


}
initDB();
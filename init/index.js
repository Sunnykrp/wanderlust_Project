const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL ="mongodb+srv://sunnykrp3:sunny9939@cluster0.v4vin.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  // await Listing.deleteMany({});
  initData.data = initData.data.map((obj)=> ({...obj , owner:'67ffc9167124998e87464c17'}));
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();
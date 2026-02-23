const mongoose = require("mongoose");

const connectDB = async () => {
  try {
     await mongoose.connect("mongodb+srv://julianakanu03_db_user:BgXvmAwTO990R7vN@cluster0.hhxwf52.mongodb.net/");
    console.log("MongoDB Connected");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;




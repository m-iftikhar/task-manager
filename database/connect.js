const mongoose = require('mongoose');

// Corrected and encoded MongoDB connection string
// const connectionString = 'mongodb+srv://MuhmmadIftikhar:booktreasuremongodb@cluster0.fzanulk.mongodb.net/'


const connectDB= (url)=>{
return  mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true,  })
}
// Connect to MongoDB
  // .then(() => {
  //   console.log("Connected to the MongoDB database");
  // })
  // .catch((err) => {
  //   console.error("Error connecting to MongoDB:", err.message);
  // });
module.exports=connectDB;
const mongoose = require('mongoose');
// console.log(mongoose);

const secretKey = "asdfghjklzxcvbnmqwertyuiopASDFGHWERTYUZXCVB23456789!@#$%";

const SMTP = {
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "pareeka8209@gmail.com",
    pass: "toosmedwuyppiege",
  },
};

const connectDB = async () => {
  try {
    const uri = 'mongodb://127.0.0.1:27017/myServer'
    return mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.log("Database not connected Error:", error);
  }
};


module.exports = { secretKey, connectDB, SMTP };
const mongoose = require('mongoose');
var valid = require("validator");
const Schema = mongoose.Schema



const userSchema = Schema({

  Email: {
    type: String,
    required: true,
    validate: {
      validator: (val) => {
        return valid.isEmail(val);
      },
      message: "invalide email !",
    },
  },
  Password: {
    type: String,
    required: true,
    
  },
  //chessUserName
  Name: {
    type: String,
    required: true,
  },
  Verified: {
    type: Boolean,
    default: false,
  },
  Role: {
    type: String,
    default: "User",
  },
  
},{
  timestamps: true, // Enable timestamps
})
module.exports = mongoose.model("User" , userSchema)
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  Aadhar_number:{ 
    type: Number,
    required: true,
    min: 100000000000,
    max: 999999999999
    // validate: {
    //         validator: function(val) {
    //             return val.toString().length === 12
    //         },
    //         message: val => `${val.value} has to be 9 digits`
    //     }
  },
  Mobile_number: {
    type: Number,
    required: true,
    min: 1000000000,
    max: 9999999999
  },
  Wallet_address: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
  },

});

export default mongoose.models.User || mongoose.model("User", userSchema);
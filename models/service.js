const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
},
  address: { 
    type: String, 
    required: true 
},
  manager: { 
    type: String, 
    required: true 
},
});

module.exports = mongoose.model("Service", serviceSchema);

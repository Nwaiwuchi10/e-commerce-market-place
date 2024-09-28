const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
const CategorySchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

//Export the model
module.exports = mongoose.model("Category", CategorySchema);

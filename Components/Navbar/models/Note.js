const mongoose = require("mongoose");

const noteSchema = new Mongoose.Schema({
  title: {
    type: String,
    required: [true, "please add a title"],
    unique: true,
    trim: true,
    maxLength: [40, "title cannot be morethan 40 characters"],
  },
  description: {
    type: String,
    required: true,
    maxLength: [200, "description canot be more than 200 characters"],
  },
});

module.exports = mongoose.models.Note || mongoose.model("Note", noteSchema);

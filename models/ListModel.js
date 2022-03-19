const mongoose = require('./connectDB')  

const TodoSchema = mongoose.Schema(
  {
    listName: String,
    userID: {
      type: String,
      ref: "user",
    },
  },
  { collection: "list" }
);

const ListModel = mongoose.model("list", TodoSchema);

// ListModel.create({
//   listname: 'Test',
//   userID: '623588eb2d008c690a681062',
// })

module.exports = ListModel;

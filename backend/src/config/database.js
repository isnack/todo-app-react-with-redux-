const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
module.exports = mongoose.connect(
  "mongodb+srv://todoapp:todoapp123@todo-elddu.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);
